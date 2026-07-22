// biome-ignore lint/nursery/noRestrictedImports: <explanation>
import { readFileSync } from "node:fs";
import { cp, mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { delimiter, join as pathJoin } from "node:path";
import toml from "toml";
import { test } from "vitest";
import { $ as $$, type Shell } from "zx/core";

export function run({
	name,
	version = "latest",
	afterInstall,
}: {
	name: string;
	version?: string;
	afterInstall?: ($: Shell) => Promise<void>;
}) {
	const tomlPathSource = pathJoin(import.meta.dirname, name, "plugin.toml");
	const content = readFileSync(tomlPathSource, { encoding: "utf-8" });
	const data = toml.parse(content) as Plugin;
	const platform = getPlatform();
	const supportPlatforms = Object.keys(data.platform);
	const skip = !supportPlatforms.includes(platform);
	console.log(`[${name}] supports: [${supportPlatforms}], current: ${platform}, skip: ${skip}`);
	test.skipIf(skip)(
		`proto_install_${name}_${version}`,
		{ timeout: Number.POSITIVE_INFINITY },
		async () => {
			const dir = await mkdtemp(`${tmpdir()}/proto-plugin-test-${name}`);
			const protoHome = await mkdtemp(`${tmpdir()}/proto-plugin-home-${name}`);
			const tomlPathDist = pathJoin(dir, "plugin.toml");
			const $ = $$({
				cwd: dir,
				verbose: true,
				env: {
					...process.env,
					PATH: [pathJoin(protoHome, "shims"), process.env["PATH"]]
						.filter(Boolean)
						.join(delimiter),
					PROTO_CONFIG_MODE: "local",
					PROTO_HOME: protoHome,
				},
			});
			await cp(tomlPathSource, tomlPathDist);
			await $`pwd`;
			await $`proto plugin add ${name} source:./plugin.toml`;
			await $`proto install ${name} ${version}`;
			await $`proto pin ${name} ${version}`;
			if (afterInstall) {
				await afterInstall($);
			}
		},
	);
}

type Plugin = {
	name: string;
	platform: Partial<Record<"linux" | "macos" | "windows", object>>;
};

function getPlatform(): "linux" | "macos" | "windows" | "unknown" {
	return process.platform === "linux"
		? "linux"
		: process.platform === "darwin"
			? "macos"
			: process.platform === "win32"
				? "windows"
				: "unknown";
}
