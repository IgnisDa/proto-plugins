import { run } from "../testkit.js";

run({
	name: "gitui",
	afterInstall: async ($) => {
		await $`gitui --version`;
	},
});
