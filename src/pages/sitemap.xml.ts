import { getCollection } from "astro:content";

const siteUrl = "https://adnanqidwai.github.io";
const siteLastmod = "2026-06-08";
const projectPaths = [
	"/projects/",
	"/projects/patchgym/",
	"/projects/rlm-gepa-retrieval/",
	"/projects/tinyrlvr/",
];

function escapeXml(value: string) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

function urlEntry({
	path,
	lastmod,
	changefreq,
	priority,
}: {
	path: string;
	lastmod: string;
	changefreq: "weekly" | "monthly" | "yearly";
	priority: string;
}) {
	const loc = new URL(path, siteUrl).toString();
	return [
		"  <url>",
		`    <loc>${escapeXml(loc)}</loc>`,
		`    <lastmod>${lastmod}</lastmod>`,
		`    <changefreq>${changefreq}</changefreq>`,
		`    <priority>${priority}</priority>`,
		"  </url>",
	].join("\n");
}

export async function GET() {
	const posts = (await getCollection("writings", ({ data }) => !data.draft)).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	const staticEntries = [
		urlEntry({
			path: "/",
			lastmod: siteLastmod,
			changefreq: "monthly",
			priority: "1.0",
		}),
		urlEntry({
			path: "/thoughts/",
			lastmod: posts[0]?.data.updatedDate?.toISOString().slice(0, 10)
				?? posts[0]?.data.pubDate.toISOString().slice(0, 10)
				?? siteLastmod,
			changefreq: "weekly",
			priority: "0.7",
		}),
		...projectPaths.map((path) =>
			urlEntry({
				path,
				lastmod: siteLastmod,
				changefreq: "monthly",
				priority: "0.6",
			}),
		),
	];

	const postEntries = posts.map((post) =>
		urlEntry({
			path: `/thoughts/${post.slug}/`,
			lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10),
			changefreq: "yearly",
			priority: "0.6",
		}),
	);

	const xml = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...staticEntries,
		...postEntries,
		"</urlset>",
		"",
	].join("\n");

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
}
