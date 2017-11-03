import { addViews } from 'vega-multi-view';

const data = {
    specs: {
        spec1: ['../../specs/spec12-view.yml', {
            subscribe: [{
                signal: 'range_2',
                as: 'range',
            }],
        }],
        spec2: ['../../specs/spec12-controller.yml', {
            publish: [{
                signal: 'range',
                as: 'range_2',
            }],
        },
        ],
    },
    debug: true,
    renderer: 'svg',
    cssClass: 'view',
    container: document.getElementById('container'),
};

// create the views
addViews(data)
    .then((result) => {
        // do other stuff
        console.log(result);

        // const view = result[0].view;
        // view.addEventListener('raw_start_date', (value1, value2) => {
        //     console.log(value1, value2);
        // });
    });

