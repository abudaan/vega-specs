import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec1 from '../../specs/spec8a';
import generateSpec2 from '../../specs/spec8b';
// Vega rendering a map using leaflet-vega

const spec1 = generateSpec1({
    dataPath: '../../data/',
    imagePath: '../../img/',
});
spec1.runtime = {
    leaflet: true,
    element: 'app1',
    publish: {
        signal: 'detailDomain',
        as: 'range',
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

const spec2 = generateSpec2({
    dataPath: '../../data/',
    imagePath: '../../img/',
});
spec2.runtime = {
    element: 'app2',
    subscribe: {
        signal: 'range',
        as: 'detailDomain',
    },
};

createViews({ specs: [spec1, spec2] });

document.getElementById('generate-spec1')
    .addEventListener('click', () => showSpecInTab(spec1));

document.getElementById('generate-spec2')
    .addEventListener('click', () => showSpecInTab(spec2));
