# vega-specs

Experimenting with Vega 3 specs.

## Javascript Vega specifications

Crafting Vega specifications (specs) in JSON can be very cumbersome; you can not comment out certain parts for testing and you can't add inline documentation.

That is why I build up my Vega specs from separate javascript objects:

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

...

```

Then I use an export function that returns the Vega spec as Javascript object. In some cases it can be handy to pass arguments, for instance for dynamically setting the path to data sources and images:

```javascript
export default function (args) => {
    const {
        dataPath,
        imagePath
    } = args;

    const data = [{
        name: 'map',
        url: `${dataPath}map.topo.json`,
    }];

    const marks = [{
        type: 'image',
        name: 'schools_image',
        encode: {
            enter: {
                url: {
                    value: `${imagePath}school.png`,
                },
                ...
            }
        }
    }]

    // the rest of you spec objects ...

    return {
        $schema: 'https://vega.github.io/schema/vega/v3.0.json',
        width: 720,
        height: 720,
        autosize: 'none',
        scales,
        signals,
        data,
        marks,
        projections,
        ...
    }
};
```

Then I can import the spec anywhere and add it to the Vega runtime:

```javascript
import createSpec from '../src/specs/spec5';

const spec = createSpec({
    dataPath: '../../data',
    imagePath: '../../img',
});

const view = new vega.View(vega.parse(spec))
    .renderer('canvas')
    .initialize('vega-div')
    .hover()
    .run();
```

To render separate specs that can listen to each other's signals I use [vega-multi-view](https://github.com/abudaan/vega-multi-view).

## Specs as JSON

I have added [functionality](https://stackoverflow.com/questions/27705640/display-json-in-a-readable-format-in-a-new-tab) to print the spec as JSON to a new browser tab to allow you to open and save the spec as separate `.vg.json` file:

If you want to convert the spec before runtime into a JSON file there is a gulp script for that as well: `gulp create_specs`. It converts all specs in the `specs` folder; the JSON files are written to the same folder.

## Experiments

I have created a few experiments that all address different functionality of Vega, I will add more documentation as soon as I can find the time to do it.

### experiment 2

Using webfonts and css in Vega specs using SVG renderer.
[[live demo]](https://abudaan.github.io/vega-specs/experiments/2/)

### experiment 2a

Using webfonts and css in Vega specs using canvas renderer.
[[live demo]](https://abudaan.github.io/vega-specs/experiments/2a/)

### experiment 3

Render tooltips on top of a map using [Vega-tooltip](https://github.com/vega/vega-tooltip).
[[live demo]](https://abudaan.github.io/vega-specs/experiments/3/)

### experiment 4

Render a Vega spec to a layer in Leaflet using [leaflet-vega](https://github.com/nyurik/leaflet-vega).
[[live demo]](https://abudaan.github.io/vega-specs/experiments/4/)

### experiment 5

Upper part of this [example](https://vega.github.io/vega/examples/overview-plus-detail/)
[[live demo]](https://abudaan.github.io/vega-specs/experiments/5/)

### experiment 6

Controller part of this [example](https://vega.github.io/vega/examples/overview-plus-detail/)
[[live demo]](https://abudaan.github.io/vega-specs/experiments/6/)

### experiment 7

This [example](https://vega.github.io/vega/examples/overview-plus-detail/) split into 2 separate specs, but the upper spec still receives the signal of the controller spec.
[[live demo]](https://abudaan.github.io/vega-specs/experiments/7/)

### experiment 8

Scatterplot with selectable date range; 2 separate specs.
[[live demo]](https://abudaan.github.io/vega-specs/experiments/8/)

### experiment 9

Display hover signal in another (non-related) spec
[[live demo]](https://abudaan.github.io/vega-specs/experiments/9/)

### experiment 10

Same as experiment 8 but now the specs get read from the dataset attribute of the body, see the [source](https://raw.githubusercontent.com/abudaan/vega-specs/gh-pages/experiments/10/index.html) of the html file.
[[live demo]](https://abudaan.github.io/vega-specs/experiments/10/)

This is an ongoing project: more tests will follow.


## Project setup

- **css**: contains both the sass files and the compiled css file
- **data**: the data sources that are used in the specs
- **experiments**: the code of the experiments as described above, every experiment has its own sub folder
- **img**: the images that are used in the specs
- **node_modules**: you will see this folder after you've run `yarn install` or `npm install`
- **scripts**: contains a script that converts the Vega specs from javascript to json files, used by gulp.
- **specs**: all Vega specs both in javascript and json format
- **gulp.babel.js**: contains build and watch scripts
    - `gulp build_css` compiles sass to a single css
    - `gulp build_all` builds all experiments
    - `gulp build_js -e 3` build single experiment, in this case experiment 3
    - `gulp watch_all` watch all experiments; compiles all experiments continuously:
    - `gulp watch_all -e 9` single out the experiment that you're working on; in this case only experiment #9 is watched
    - `gulp create_specs` converts all specs in javascript format to JSON files


## Run locally

If you have Python installed you can start the SimpleHTTPServer at port 9001 with the command `npm run server`
