# vega-specs

Experimenting with Vega 3 specs.

## JSON

In my experience it is very cumbersome to draft Vega specs in JSON; you can not comment out certain parts for testing and you can't add inline documentation.

Therefor I decided to assemble Vega specs from separate javascript objects:

```javascript
const signals = [
    ...
];


const data = [
    ...
];

const marks = [
    ...
];

const projections = [
    ...
];

const scales = [
    ...
];

export default {
    $schema: 'https://vega.github.io/schema/vega/v3.0.json',
    width: 720,
    height: 720,
    autosize: 'none',
    scales,
    signals,
    data,
    marks,
    projections,
};
```
Then I use es6 `import` to render them with the Vega runtime:

```javascript
import spec from '../src/specs/spec5';

const view = new vega.View(vega.parse(spec))
    .renderer(renderer)
    .initialize('vega-spec')
    .hover()
    .run();
```
And I have added functionality to print the object as JSON to a new browser tab:

```javascript
const json = JSON.stringify(spec, null, 4);
const w = window.open();
w.document.open();
w.document.write(`<html><body><pre>${json}</pre></body></html>`);
w.document.close();
```
All [credits](https://stackoverflow.com/questions/27705640/display-json-in-a-readable-format-in-a-new-tab).

## Tests

I have created a few tests that isolate certain Vega functionality

### test 2
Using webfonts and css in Vega specs.
[link](https://abudaan.github.io/vega-specs/2/)

### test 3
Render tooltips on top of a map using [Vega-tooltip](https://github.com/vega/vega-tooltip).
[link](https://abudaan.github.io/vega-specs/3/)

### test 4
Render a Vega spec to a layer in Leaflet using [leaflet-vega](https://github.com/nyurik/leaflet-vega).
[link](https://abudaan.github.io/vega-specs/4/)

This is an ongoing project: more tests will follow.


## Project setup

Folders with a number as name contains the tests.

- bumf: sort of recycle bin, don't look inside :)
- css
- data: the data sources that are used in the specs
- img: the images that are used in the specs
- lib: external libraries, leaflet-vega, vega-tooltip, etc. (unfortunately you can't import them)
- node_modules: you will see this folder after you've run `yarn install` or `npm install`
- src: the es6 code
    - specs: the es6 file that export the Vega specs
    - util
- package.json: contains build and watch scripts
    - `npm run build` builds all examples
    - `npm run watch` compiles continuously, edit the command to match the test that you're working on
