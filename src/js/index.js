import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec from '../../specs/spec2';

const spec = generateSpec({
    dataPath: './data/',
    imagePath: './img/',
});
spec.runtime = ({
    element: false,
});

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

document.getElementById('show-spec')
    .addEventListener('click', () => showSpecInTab(spec));

