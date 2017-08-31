import R from 'ramda';
import spec1 from '../src/specs/spec8a';
import spec2 from '../src/specs/spec8b';
import createView from '../src/util/create-vega-view';
import generateSpec from '../src/util/generate-spec';

// Vega rendering a map using leaflet-vega

window.addEventListener('DOMContentLoaded', () => {
    let view1 = null;
    let view2 = null;

    const connect = () => {
        view2.addSignalListener('detailDomain', (name, value) => {
            view1.signal('detailDomain', value).run();
        });
    };

    createView({
        spec: spec1,
        id: 'app1',
        renderer: 'svg',
        addLeaflet: false,
        addTooltip: true,
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
        callback: (view) => {
            view1 = view;
            if (view1 !== null && view2 !== null) {
                connect();
            }
        },
    });

    createView({
        spec: spec2,
        id: 'app2',
        renderer: 'canvas',
        addLeaflet: false,
        addTooltip: false,
        tooltipOptions: {},
        callback: (view) => {
            view2 = view;
            if (view1 !== null && view2 !== null) {
                connect();
            }
        },
    });


    document.getElementById('generate-spec1')
    .addEventListener('click', () => generateSpec(spec1));

    document.getElementById('generate-spec2')
    .addEventListener('click', () => generateSpec(spec2));
});
