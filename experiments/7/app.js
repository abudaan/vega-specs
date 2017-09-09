import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec1 from '../../specs/spec6a';
import generateSpec2 from '../../specs/spec6b';

const spec1 = generateSpec1({
    dataPath: '../../data/',
    imagePath: '../../img/',
});
spec1.runtime = {
    element: 'app1',
    subscribe: {
        signal: 'range',
        as: 'detailDomain',
    },
};

const spec2 = generateSpec2({
    dataPath: '../../data/',
    imagePath: '../../img/',
});
spec2.runtime = {
    element: 'app2',
    publish: {
        signal: 'detailDomain',
        as: 'range',
    },
};

createViews({ specs: [spec1, spec2], debug: true });

document.getElementById('generate-spec1')
    .addEventListener('click', () => showSpecInTab(spec1));

document.getElementById('generate-spec2')
    .addEventListener('click', () => showSpecInTab(spec2));
