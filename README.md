## Install

```console
$ yarn add https://github.com/ktv18/react-component-generator
```

Options:

- `-d, --destination <destination>`: Define the destination for component.
- `-cm, --css-modules`: Should use css module format.
- `-t, --tests`: Should generate test file.
- `--scss`: Should generate style file with scss extension.

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
