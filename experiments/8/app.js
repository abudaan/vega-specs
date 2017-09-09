import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec1 from '../../specs/spec8a';
import generateSpec2 from '../../specs/spec8b';

const paths = {
    dataPath: '../../data/',
    imagePath: '../../img/',
};

const spec1 = generateSpec1(paths);
spec1.runtime = {
    element: 'app1',
    subscribe: {
        signal: 'range',
        as: 'detailDomain',
    },
    tooltipOptions: {
        showAllFields: false,
        fields: [
            {
                formatType: 'string',
                field: 'name',
                title: 'buurt',
            },
            {
                formatType: 'number',
                field: 'reports',
                title: 'reports',
            },
            {
                formatType: 'number',
                field: 'dumps',
                title: 'dumps',
            },
            {
                formatType: 'number',
                field: 'fillperc',
                title: 'fillperc',
            },
        ],
    },
};

const spec2 = generateSpec2(paths);
spec2.runtime = {
    element: 'app2',
    publish: {
        signal: 'detailDomain',
        as: 'range',
    },
};

createViews({ specs: [spec1, spec2] });

document.getElementById('generate-spec1')
    .addEventListener('click', () => showSpecInTab(spec1));

document.getElementById('generate-spec2')
    .addEventListener('click', () => showSpecInTab(spec2));
