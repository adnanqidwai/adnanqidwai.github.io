export const projectPages = [
	{
		slug: "patchgym",
		title: "PatchGym",
		windowTitle: "PatchGym",
		description:
			"Verifier-backed coding-agent environment with generated Python repair tasks, reset/step episodes, hidden tests, API checks, edit budgets, and trace logging.",
		caption: "u/adnanqidwai/projects/patchgym.md",
		summary:
			"PatchGym is a deterministic coding-agent evaluation harness and RL-style environment. It generates small multi-file Python repositories with seeded bugs, exposes read/edit/test/submit episode actions, and verifies repairs with public tests, hidden tests, API-contract checks, and edit-budget checks.",
		sections: [
			{
				title: "What It Builds",
				items: [
					"Task generators for parser, CLI, and SQLite mini-repository templates.",
					"Verifier stack with public tests, hidden tests, API-contract checks, and patch-budget checks.",
					"RL-style reset/step API with read_file, write_file, run_public_tests, and submit_patch actions.",
					"Agent runner that stores trace logs and final repository snapshots.",
					"Optional Prime Intellect verifiers adapter and DSPy RLM + GEPA patch-planning path.",
				],
			},
			{
				title: "Why It Matters",
				items: [
					"Separates visible-test success from hidden-test and API-contract failures.",
					"Makes coding-agent repairs measurable beyond a single pass/fail test run.",
					"Uses deterministic feedback so prompt optimization can be evaluated on held-out tasks.",
				],
			},
		],
		keywords: ["coding agents", "RL environment", "verifiers", "hidden tests", "Prime Intellect", "GEPA", "DSPy RLM"],
	},
	{
		slug: "rlm-gepa-retrieval",
		title: "RLM + GEPA for Retrieval",
		windowTitle: "RLM + GEPA for Retrieval",
		description:
			"Trace-grounded DSPy RLM + GEPA retrieval-policy harness with host-backed tools, split-disjoint tasks, deterministic controls, citations, and budget scoring.",
		caption: "u/adnanqidwai/projects/rlm-gepa-retrieval.md",
		summary:
			"RLM + GEPA for Retrieval is a trace-grounded retrieval-policy harness. A DSPy RLM answers questions over a local Markdown corpus by calling host-backed search and document tools, while evaluation scores citation support, answer terms, and budget use from the recorded tool trace.",
		sections: [
			{
				title: "What It Builds",
				items: [
					"Split-disjoint Markdown QA task bank with required answer terms and gold support passage IDs.",
					"Host-backed tools for lexical search, document opening, and targeted in-document search with recorded execution traces.",
					"Deterministic controls: a lexical heuristic and a single-shot RAG baseline.",
					"Trace-aware scoring for answer correctness, evidence recall, citation precision, and budget efficiency.",
					"GEPA optimization path for improving the textual retrieval policy from deterministic failure feedback.",
				],
			},
			{
				title: "Why It Matters",
				items: [
					"Keeps retrieval behavior auditable through execution traces rather than model self-reporting.",
					"Compares agentic retrieval against retrieve-once RAG before claiming policy improvements.",
					"Turns citation and budget errors into concrete feedback for policy optimization.",
					"Provides a small local setup for studying agentic retrieval without requiring a vector database or LLM judge.",
				],
			},
		],
		keywords: ["retrieval", "RAG", "citations", "budget scoring", "DSPy", "GEPA", "single-shot RAG", "tool traces"],
	},
	{
		slug: "tinyrlvr",
		title: "TinyRLVR",
		windowTitle: "TinyRLVR",
		description:
			"Small verifiable reasoning environment for Countdown/24-game tasks with exact checking, GRPO-style training, and budgeted test-time control.",
		caption: "u/adnanqidwai/projects/tinyrlvr.md",
		summary:
			"TinyRLVR is a symbolic Countdown/24-game environment for studying verifiable reasoning and test-time compute control. It generates solvable arithmetic tasks, checks candidate expressions with exact rational arithmetic, and learns when extra inference-time attempts are worth the cost.",
		sections: [
			{
				title: "What It Builds",
				items: [
					"Solvable 24-game task generator backed by an exact brute-force solver.",
					"Verifier that rejects invalid syntax, repeated numbers, floats, unsupported operators, and wrong expressions.",
					"Tree policies trained with verifier rewards, process imitation, and GRPO-style group-relative updates.",
					"Q-learning controller that decides when to sample, verify, accept, or abstain under a budget.",
				],
			},
			{
				title: "Why It Matters",
				items: [
					"Studies RLVR mechanics in a small setting where every answer can be checked exactly.",
					"Separates raw pass@k capability from the cost of selecting a good answer.",
					"Reports matched multi-seed comparisons instead of relying on one lucky run.",
				],
			},
		],
		keywords: ["RLVR", "verifiable rewards", "test-time compute", "Q-learning", "GRPO"],
	},
] as const;

export type ProjectPage = (typeof projectPages)[number];
