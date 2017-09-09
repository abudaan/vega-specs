import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec from '../../specs/spec6a';

// Vega rendering a map using leaflet-vega

const spec = generateSpec({
    dataPath: '../../data/',
    imagePath: '../../img/',
});
spec.runtime = {
    element: 'app',
};

createViews({ specs: spec });

document.getElementById('generate-spec')
    .addEventListener('click', () => showSpecInTab(spec));
