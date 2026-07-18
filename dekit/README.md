# dekit plugin

[dekit](https://github.com/pvolok/dekit) plugin for [proto](https://github.com/moonrepo/proto).

dekit is a scriptable process manager you drive from a CLI, TUI, API, or script (formerly known as mprocs).

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add dekit "source:https://raw.githubusercontent.com/<owner>/<repo>/main/dekit/plugin.toml" --global
proto install dekit canary
```

### Per-project install

```shell
proto plugin add dekit "source:https://raw.githubusercontent.com/<owner>/<repo>/main/dekit/plugin.toml"
proto pin dekit canary
```

## Installing canary vs stable

dekit is mid-rename from `mprocs` to `dekit`. The latest **stable** releases (`v0.9.x`) still ship assets under the legacy `mprocs-*` naming and **cannot** be installed with this plugin. The new `dekit-*` asset naming (with `SHA256SUMS` checksums) is available on the `canary` and `head` rolling releases, and will appear on the next stable release.

Until then, install `canary`:

```shell
proto install dekit canary
```

This plugin uses proto's built-in canary support (`download-url-canary` / `checksum-url-canary`) to pull from the rolling `canary` release on GitHub.

## Platforms

| OS | Architectures | Archive |
| --- | --- | --- |
| Linux | `x86_64`, `aarch64` | `dekit-{arch}-unknown-linux-musl.tar.gz` |
| macOS | `x86_64`, `aarch64` | `dekit-{arch}-apple-darwin.tar.gz` |
| Windows | `x86_64` | `dekit-{arch}-pc-windows-msvc.zip` |

Checksums are verified against the `SHA256SUMS` file published with each release.
