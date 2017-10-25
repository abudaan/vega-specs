import createViews from 'vega-multi-view';

const data = {
    specs: [
        '../../specs/spec12.json',
    ],
    debug: true,
    renderer: 'svg',
    cssClass: 'view',
    container: document.getElementById('container'),
};

// create the views
createViews(data)
    .then((result) => {
        // do other stuff
        console.log(result);

        const view = result[0].view;
        view.addEventListener('xdown', (value1, value2) => {
            console.log(value1, value2);
        });
    });

