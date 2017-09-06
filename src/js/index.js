import createViews from 'vega-multi-view';
import generateSpec from '../../specs/spec2';
import config from '../../src/js/util/config';

window.addEventListener('DOMContentLoaded', () => {
    const spec = generateSpec(config());
    const data = {
        specs: [
            './specs/world.vg.json',
            './specs/spec4a.json',
            spec,
        ],
        cssClass: 'view', // css class that will be applied to every rendered vega spec
        container: document.getElementById('container'),
    };
    createViews(data)
        .then(result => console.log(result));
});

