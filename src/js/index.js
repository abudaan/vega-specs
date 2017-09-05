import createViews from 'vega-multi-view';

window.addEventListener('DOMContentLoaded', () => {
    const data = {
        urls: [
            './specs/world.vg.json',
            './specs/spec4a.json',
        ],
        cssClass: 'view', // css class that will be applied to every rendered vega spec
        container: document.getElementById('container'),
    };
    createViews(data)
        .then(result => console.log(result));
});

