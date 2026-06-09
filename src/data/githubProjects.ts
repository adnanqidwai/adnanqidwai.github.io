export type GithubProject = {
	title: string;
	href: string;
	group: "systems" | "compilers" | "nlp" | "classicalMl" | "dataMining" | "other";
	description: string;
};

export const githubProjectGroups = [
	{
		id: "systems",
		title: "AI Systems, RL and Agents",
	},
	{
		id: "compilers",
		title: "Compilers and systems",
	},
	{
		id: "nlp",
		title: "Core NLP Tasks",
	},
	{
		id: "classicalMl",
		title: "Classical ML",
	},
	{
		id: "dataMining",
		title: "Data mining and analytics",
	},
	{
		id: "other",
		title: "Other code",
	},
] as const satisfies readonly { id: GithubProject["group"]; title: string }[];

export const githubProjects: GithubProject[] = [
	{
		title: "PatchGym",
		href: "https://github.com/adnanqidwai/PatchGym",
		group: "systems",
		description:
			"Verifier-backed coding-agent environment that generates seeded Python repair tasks, runs agents in copied workspaces, and grades patches with public/hidden tests, API checks, and edit budgets.",
	},
	{
		title: "RLM + GEPA for Retrieval",
		href: "https://github.com/adnanqidwai/DSPy-RLM_with_GEPA",
		group: "systems",
		description:
			"Retrieval-policy harness where a DSPy RLM searches local Markdown documents, cites evidence, and is scored from tool traces. GEPA refines the written policy from answer, citation, and budget failures.",
	},
	{
		title: "TinyRLVR",
		href: "https://github.com/adnanqidwai/TinyRLVR",
		group: "systems",
		description:
			"Small verifiable reasoning lab for Countdown/24-game tasks, exact arithmetic checking, expression-tree policies, and a Q-learning controller for budgeted test-time compute.",
	},
	{
		title: "LLM Compiler",
		href: "https://github.com/adnanqidwai/LLM-Compiler",
		group: "systems",
		description:
			"LangGraph tool-use agent that decomposes a query into dependent tool calls, runs independent calls in parallel, and joins the results before answering.",
	},
	{
		title: "Voice RAG Tutor",
		href: "https://github.com/adnanqidwai/RAG-TTS-Agent",
		group: "systems",
		description:
			"Voice-enabled learning tool that combines retrieval, agent routing, and text-to-speech for learning about music.",
	},
	{
		title: "Nanopass Compiler for Racket",
		href: "https://github.com/adnanqidwai/nanopass-compiler",
		group: "compilers",
		description:
			"Racket-to-x86 compiler organized as small lowering passes across staged IRs, with vectors/tuples, heap allocation, garbage collection, and register allocation.",
	},
	{
		title: "Parallel t-Spanner Construction",
		href: "https://github.com/adnanqidwai/T-spanner_of_graphs__parallelized",
		group: "compilers",
		description:
			"C++ graph-algorithms project for constructing sparse t-spanners and comparing sequential versus parallel construction behavior.",
	},
	{
		title: "Neural POS Taggers",
		href: "https://github.com/adnanqidwai/POS-Taggers",
		group: "nlp",
		description:
			"Part-of-speech taggers built with feed-forward and recurrent neural models for sequence-labeling experiments.",
	},
	{
		title: "NLP Course Exercises",
		href: "https://github.com/adnanqidwai/LearningNLP",
		group: "nlp",
		description:
			"NLP exercises covering word vectors, neural classifiers, and sequence models.",
	},
	{
		title: "K-Means from Scratch",
		href: "https://github.com/adnanqidwai/KMeans_implementation",
		group: "classicalMl",
		description:
			"K-means clustering from scratch on a football dataset, including centroid updates and cluster assignments.",
	},
	{
		title: "Multiclass SVMs",
		href: "https://github.com/adnanqidwai/multiclassSVMs",
		group: "classicalMl",
		description:
			"Multiclass SVMs comparing one-vs-rest and one-vs-one classification strategies.",
	},
	{
		title: "Random Forest from Scratch",
		href: "https://github.com/adnanqidwai/RandomForestClassifier_implementation",
		group: "classicalMl",
		description:
			"Random forest classifier from scratch over penguin data, covering bootstrapping, feature splits, and tree-vote aggregation.",
	},
	{
		title: "Clustering Algorithm Comparison",
		href: "https://github.com/adnanqidwai/Comparing_Clustering_Algos",
		group: "classicalMl",
		description:
			"Comparison of clustering algorithms across compact, skewed, subclustered, and well-separated datasets.",
	},
	{
		title: "Paged Data-Cube Construction",
		href: "https://github.com/adnanqidwai/Data_cube_construction-using-paging",
		group: "dataMining",
		description:
			"Paged data-cube construction with merging and attribute-oriented induction.",
	},
	{
		title: "FP-Growth Movie Recommender",
		href: "https://github.com/adnanqidwai/Movie-Recommendation-using-FPGrowth-association",
		group: "dataMining",
		description:
			"Movie recommender built with FP-Growth association-rule mining over frequent itemsets.",
	},
	{
		title: "Makaan Housing Analytics",
		href: "https://github.com/adnanqidwai/Data-Analytics-on-Makaan.com-Data",
		group: "dataMining",
		description:
			"Housing-data analysis over scraped Makaan.com listings, covering cleaning, summary statistics, and basic market patterns.",
	},
	{
		title: "Eggshell",
		href: "https://github.com/adnanqidwai/eggshell",
		group: "compilers",
		description:
			"Unix-style shell implementation with command execution and systems-programming primitives.",
	},
];
