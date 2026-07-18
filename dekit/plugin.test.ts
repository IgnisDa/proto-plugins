import { run } from "../testkit.js";

run({
	name: "dekit",
	version: "canary",
	afterInstall: async ($) => {
		await $`dekit --version`;
	},
});
