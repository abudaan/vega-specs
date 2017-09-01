// polyfills
import 'core-js/es6/promise';
import 'core-js/fn/array/from';
import 'core-js/fn/array/find-index';

import R from 'ramda';
import spec2 from '../specs/spec8b';
import spec1 from '../specs/spec8a';
import createView from './util/create-vega-view';
import generateSpec from './util/generate-spec';

// Vega rendering a map using leaflet-vega

window.addEventListener('DOMContentLoaded', () => {
    let view1 = null;
    let view2 = null;

    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.zIndex = 100;
    // tooltip.style.width = '100px';
    // tooltip.style.height = '100px';
    tooltip.style.backgroundColor = 'white';
    tooltip.style.top = '-1000px';
    tooltip.style.left = '100px';
    tooltip.style.color = '#000';
    tooltip.style.textAlign = 'center';
    tooltip.style.padding = '10px';
    document.body.appendChild(tooltip);


    const connect = () => {
        view2.addSignalListener('detailDomain', (name, value) => {
            view1.signal('detailDomain', value).run();
        });
    };

    createView({
        spec: spec1,
        id: 'app1',
        renderer: 'canvas',
        addLeaflet: false,
        addTooltip: false,
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
            // view.logLevel(vega.Debug);
            // view.run('aap');
            view.hover();
            view.tooltipHandler((event, item, name) => {
                if (event.vegaType === 'mouseout') {
                    tooltip.style.top = `${event.clientY}px`;
                    tooltip.style.left = `${event.clientX + 20}px`;
                    tooltip.innerHTML = name;
                    tooltip.innerHTML += `<br>${item.datum.fillperc}%`;
                } else {
                    tooltip.style.top = '-1000px';
                    tooltip.innerHTML = '';
                }
            });
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
