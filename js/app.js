import R from 'ramda';
import TestSpec1 from '../specs/spec1';
import TestSpec2 from '../specs/spec2';
import TestSpec3 from '../specs/spec3';
import TestSpec4 from '../specs/spec4';
import createView from './util/create-vega-view';

const toolTipOptions = {
    // showAllFields: true,
    fields: [
        {
            formatType: 'number',
            field: 'stortingen',
        },
        {
            formatType: 'number',
            field: 'vulling',
        },
        {
            formatType: 'number',
            field: 'meldingen',
        },
    ],
};

window.addEventListener('DOMContentLoaded', () => {
    createView(TestSpec4, 'app', 'canvas', true, (view) => {
        if (view && view._signals) {
            R.forEach((signal) => {
                view.addSignalListener(signal, (name, data) => {
                    console.log(name, data);
                });
            }, R.keys(view._signals));
        }
        if (view && view.data) {
            const stamp = Date.now();
            // const dataLoaded = setInterval(() => {
            //     try {
            //         const reports = view.data('reports');
            //         if (reports) {
            //             console.log(Date.now() - stamp, reports);
            //             clearInterval(dataLoaded);
            //         }
            //     } catch (e) {
            //         console.error(e);
            //     }
            // }, 1);
        }
    });
});
