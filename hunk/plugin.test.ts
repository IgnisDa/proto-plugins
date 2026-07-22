import { run } from "../testkit.js";

run({
	name: "hunk",
	afterInstall: async ($) => {
		await $`hunk --version`;
	},
});
