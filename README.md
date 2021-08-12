## Install

```console
$ yarn add https://github.com/ktv18/react-component-generator
```

Options:

- `-d, --destination <destination>`: Override the destination for component.
- `-cm, --css-modules`: Use css module format.
- `-t, --tests`: should generate test file.
- `--scss`: should genera style file with scss extension.

Examples:

```console
$ yarn generate-component --destination=src/components --tests --css-modules --scss
```

Add to package scripts

```
  "scripts": {
    "gc": "yarn generate-component --destination=src/components --tests --css-modules --scss"
  },
```

then use:

```console
$ yarn gc
```
