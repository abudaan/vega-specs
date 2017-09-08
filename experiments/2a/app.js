import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec from '../../specs/spec5a';

// Vega using webfonts and show how you can update css properties after the spec
// has been rendered (using canvas renderer, see the spec how this is done).

const spec = generateSpec();
spec.runtime = {
    element: 'app',
    run: true,
};
const data = {
    specs: spec,
    renderer: 'canvas',
    debug: true,
};


createViews(data)
    .then(result => console.log(result));

document.getElementById('generate-spec')
    .addEventListener('click', () => showSpecInTab(spec));
