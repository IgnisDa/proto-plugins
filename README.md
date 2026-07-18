# Proto Plugins

Community [proto](https://github.com/moonrepo/proto) TOML plugins.

## Available plugins

| Plugin | Tool | Source |
| --- | --- | --- |
| `dekit` | [dekit](https://github.com/pvolok/dekit) — scriptable process manager (CLI, TUI, API) | [dekit/plugin.toml](./dekit/plugin.toml) |
| `gitui` | [gitui](https://github.com/gitui-org/gitui) — blazing fast terminal-ui for git | [gitui/plugin.toml](./gitui/plugin.toml) |

## Usage

Add a plugin to proto, then install it. For example, for `gitui`:

```shell
# Global
proto plugin add gitui "source:https://raw.githubusercontent.com/<owner>/<repo>/main/gitui/plugin.toml" --global
proto install gitui

# Per-project
proto plugin add gitui "source:https://raw.githubusercontent.com/<owner>/<repo>/main/gitui/plugin.toml"
proto pin gitui latest --resolve
```

See each plugin's README for tool-specific notes (e.g. `dekit` requires `canary` until the next stable release ships).

## Local development

This repo mirrors the layout of [appthrust/proto-toml-plugins](https://github.com/appthrust/proto-toml-plugins). Tests install the tool through proto and run `<binary> --version`.

```shell
yarn install --immutable
moon :test            # runs vitest for all plugins
# or run a single plugin's test directly:
yarn vitest --run gitui/plugin.test.ts
```

## Contributing

1. Add a new directory named after the plugin id (kebab-case).
2. Create `plugin.toml` following the [non-WASM plugin docs](https://moonrepo.dev/docs/proto/non-wasm-plugin).
3. Create `plugin.test.ts` that calls `run({ name, ... })` from `../testkit.ts` and verifies the binary works.
4. Create `README.md` documenting install commands and any caveats.
5. Run `moon :test` locally and ensure it passes for your platform.
