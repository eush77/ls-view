[![npm](https://nodei.co/npm/ls-view.png)](https://nodei.co/npm/ls-view/)

# ls-view

[![Dependency Status][david-badge]][david]

Turns type-annotated list of files into ls-styled output. Applies colors and appends type indicators.

[david]: https://david-dm.org/eush77/ls-view
[david-badge]: https://david-dm.org/eush77/ls-view.png

## Type indicators

`ls-view` appends type indicators based on the table below.

| Type       | Suffix |
| :--------: | :----: |
| directory  | `/`    |
| symlink    | `@`    |
| executable | `*`    |
| fifo       | `|`    |
| socket     | `=`    |

## API

### `lsView(files, [opt])`

Turns list of files into a string. Each file is an object with `name` and (optional) `type` keys.

#### `opt.color`

Type: `Boolean`
Default: `true`

Enables colorful output.

#### `opt.suffixes`

Type: `Boolean`
Default: `true`

Enables type suffixes.

### `lsView.suffixes`

Mapping from types to suffixes.

### `lsView.colors`

Mapping from types to color functions.

## Install

```
npm install ls-view
```

## License

MIT
