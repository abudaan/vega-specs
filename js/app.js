import R from 'ramda';
import TestSpec1 from '../specs/spec1';
import TestSpec2 from '../specs/spec2';
import TestSpec3 from '../specs/spec3';
import TestSpec4 from '../specs/spec4';
import createView from './util/create-vega-view';

window.addEventListener('DOMContentLoaded', () => {
    createView({
        spec: TestSpec4,
        id: 'app',
        renderer: 'canvas',
        addLeaflet: true,
        addTooltip: true,
        tooltipOptions: {
            showAllFields: false,
            fields: [
                {
                    formatType: 'string',
                    field: 'properties.NAAM',
                    title: 'name',
                },
            ],
        },
        callback: (view) => {
            console.log(view);
        },
    });
});
