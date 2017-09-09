import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec from '../../specs/spec2';

const spec = generateSpec({
    dataPath: '../../data/',
    imagePath: '../../img/',
});
spec.runtime = ({
    element: false, // spec will be rendered headless
});

const data = {
    specs: [
        '../../specs/world.vg.json',
        '../../specs/spec4a.json',
        spec,
    ],
    cssClass: 'view',
    container: document.getElementById('container'),
};
createViews(data)
    .then(result => console.log(result));

document.getElementById('show-spec')
    .addEventListener('click', () => showSpecInTab(spec));

