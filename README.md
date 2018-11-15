# unson

CLI JSON processing tool harnessing the power of [unmutable](https://github.com/blueflag/unmutable).


## Installation

__yarn__

yarn global add unson

__npm__

npm install -g unson


## Usage

```
Usage: unson [options] <pipeline>

Options:
  --version          Show version number                               [boolean]
  -i, --interactive  show interactive repl to write and edit pipeline  [boolean]
  -n, --indent       indent level for output json                       [number]
  -h, --help         Show help                                         [boolean]
```

unson drops you into an unmutable [pipeWith](https://github.com/blueflag/unmutable/blob/master/DOCS.md#pipewith) function and all of the functions listed in the [unmutable docs](https://github.com/blueflag/unmutable/blob/master/DOCS.md) are available.


## Examples

All the below examples use the [data.json](./data.json) file as the data input.

```
// Get the max latitude
cat data.json | unson 'map(get("latitude")), max()'
```

```
// Group names by eye color
cat data.json | unson 'groupBy(get("eyeColor")), map(map(get("name")))'
```


### Acknowledgements

Inspired by other CLI JSON processors like [jq](https://stedolan.github.io/jq/) and (most notably) [fx](https://github.com/antonmedv/fx).

Uses [editor-widget](https://github.com/slap-editor/editor-widget) from [slap-editor](https://github.com/slap-editor/slap) for the repl text editing.

[js-playgrounds](https://github.com/derhuerst/js-playgrounds) was a big help in the initial setup of editor-widget.