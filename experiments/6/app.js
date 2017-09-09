import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec from '../../specs/spec6b';

const spec = generateSpec({
    dataPath: '../../data/',
    imagePath: '../../img/',
});
createViews({ specs: spec });

document.getElementById('generate-spec')
    .addEventListener('click', () => showSpecInTab(spec));
