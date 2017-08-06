import R from 'ramda';
import TestSpec1 from '../specs/spec1';
import TestSpec2 from '../specs/spec2';
import TestSpec3 from '../specs/spec3';
import TestSpec4 from '../specs/spec4';
import TestSpec5 from '../specs/spec5';
import createView from './util/create-vega-view';

window.addEventListener('DOMContentLoaded', () => {
    const spec = TestSpec4;

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
        callback: (view) => {
            // view.addSignalListener('update_css', (name, value) => {
            //     if (value === 0) {
            //         document.querySelectorAll('.text-webfont text').forEach((element) => {
            //             element.style.fill = 'red';
            //             element.style.fontFamily = 'Butcherman Caps';
            //             element.style.fontSize = 40;
            //         });
            //     } else {
            //         document.querySelectorAll('.text-webfont text').forEach((element) => {
            //             element.style.fill = 'white';
            //             element.style.fontFamily = 'sans-serif';
            //             element.style.fontSize = 25;
            //         });
            //     }
            // });
        },
    });

    document.getElementById('generate-spec').addEventListener('click', () => {
        // const json = encodeURIComponent(JSON.stringify(TestSpec4));
        // window.open(`data:application/json, ${json}`, '_blank');

        const json = JSON.stringify(spec, null, 4);
        const w = window.open();
        w.document.open();
        w.document.write(`<html><body><pre>${json}</pre></body></html>`);
        w.document.close();
    });
});
