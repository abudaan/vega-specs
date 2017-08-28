import R from 'ramda';
import spec1 from '../src/specs/spec8';
import spec2 from '../src/specs/spec6b';
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
        renderer: 'canvas',
        addLeaflet: true,
        addTooltip: false,
        tooltipOptions: {},
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
        addLeaflet: true,
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
