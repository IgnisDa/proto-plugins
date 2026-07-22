# Hunk plugin

[Hunk](https://github.com/modem-dev/hunk) plugin for [proto](https://github.com/moonrepo/proto).

Hunk is a review-first terminal diff viewer for agent-authored changesets.

## Installation

This is a community plugin and is not built in to proto. Add it to a project `.prototools` file and install it with:

```shell
proto plugin add hunk "source:https://raw.githubusercontent.com/IgnisDa/proto-plugins/main/hunk/plugin.toml"
proto pin hunk latest --resolve
```

To install Hunk without pinning it to the current project:

```shell
proto install hunk
```

## Platforms

| OS | Architectures | Archive |
| --- | --- | --- |
| Linux | `x86_64`, `aarch64` | `hunkdiff-linux-{arch}.tar.gz` |
| macOS | `x86_64`, `aarch64` | `hunkdiff-darwin-{arch}.tar.gz` |
| Windows | `x86_64` | `hunkdiff-windows-x64.tar.gz` |

Hunk does not publish separate checksum files, so downloads are not checksum-verified by proto.
