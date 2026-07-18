# gitui plugin

[gitui](https://github.com/gitui-org/gitui) plugin for [proto](https://github.com/moonrepo/proto).

gitui is a blazing fast terminal-ui for git, written in rust.

## Installation

This is a community plugin and is thus not built-in to proto. In order to use it, first either add it to your global or project-based `.prototools` by running:

### Global install

```shell
proto plugin add gitui "source:https://raw.githubusercontent.com/<owner>/<repo>/main/gitui/plugin.toml" --global
proto install gitui
```

### Per-project install

```shell
proto plugin add gitui "source:https://raw.githubusercontent.com/<owner>/<repo>/main/gitui/plugin.toml"
proto pin gitui latest --resolve
```

## Platforms

| OS | Architectures | Archive |
| --- | --- | --- |
| Linux | `x86_64`, `aarch64` | `gitui-linux-{arch}.tar.gz` |
| macOS | `aarch64`, `x86_64` | `gitui-mac.tar.gz` (arm64), `gitui-mac-x86.tar.gz` (x86_64) |
| Windows | `x86_64` | `gitui-win.tar.gz` |

gitui does not publish checksum files, so downloads are not checksum-verified. The macOS asset naming is irregular (the arm64 build has no arch suffix while the x86_64 build is suffixed `-x86`); this is handled with a per-platform `{arch}` mapping where `aarch64` maps to the empty string and `x86_64` maps to `-x86`.

## Caveats

- gitui publishes an `.msi` installer for Windows in addition to the `.tar.gz` archive; this plugin uses the portable `.tar.gz` archive (`gitui-win.tar.gz`).
- Linux `arm` and `armv7` builds exist in releases but are not declared in this plugin because proto's `{arch}` token resolves to `arm`/`armv7` only on those hosts and the mapping is non-obvious; if you need them, extend `[platform.linux].archs` and the download file template.
