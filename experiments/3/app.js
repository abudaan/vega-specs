import spec from '../src/specs/spec4';
import createView from '../src/js/util/create-vega-view';
import generateSpec from '../src/js/util/generate-spec';

// Shows tooltips over a map using vega-tooltip plugin

window.addEventListener('DOMContentLoaded', () => {
    createView({
        spec,
        id: 'app',
        renderer: 'canvas',
        addLeaflet: false,
        addTooltip: true,
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
    });

    document.getElementById('generate-spec')
    .addEventListener('click', () => generateSpec(spec));
});
