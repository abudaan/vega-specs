import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec from '../../specs/spec4';


// Shows tooltips over a map using vega-tooltip plugin

const spec = generateSpec({
    dataPath: '../../data/',
    imagePath: '../../img/',
});

spec.runtime = {
    run: true,
    element: 'app',
    tooltipOptions: {
        showAllFields: false,
        fields: [
            {
                formatType: 'string',
                field: 'properties.NAAM',
                title: 'buurt',
            },
            {
                formatType: 'string',
                field: 'properties.CODE',
                title: 'code',
            },
            {
                formatType: 'string',
                field: 'properties.TYPE',
                title: 'type',
            },
        ],
    },
};

createViews({ specs: spec });

document.getElementById('generate-spec')
    .addEventListener('click', () => showSpecInTab(spec));
