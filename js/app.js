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
    createView(TestSpec, 'app', false, (view) => {
        if (view.signals) {
            view.signals.forEach((signal) => {
                view.addSignalListener(signal, (name, data) => {
                    console.log(name, data);
                });
            });
        }
        if (view.data) {
            setTimeout(() => {
                console.log(view.data('reports'));
            }, 500);
        }
    });
});
