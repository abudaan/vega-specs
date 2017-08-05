import TestSpec from '../specs/spec1';
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
    createView(TestSpec, 'app', 'canvas', true, (view) => {
        if (view && view.signals) {
            view.signals.forEach((signal) => {
                view.addSignalListener(signal, (name, data) => {
                    console.log(name, data);
                });
            });
        }
        if (view && view.data) {
            const stamp = Date.now();
            const dataLoaded = setInterval(() => {
                const reports = view.data('reports');
                if (reports) {
                    console.log(Date.now() - stamp, reports);
                    clearInterval(dataLoaded);
                }
            }, 1);
        }
    });
});
