import createViews from './util/create-vega-views';

window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const addViews = (data) => {
        data.forEach((d) => {
            console.log(d);
            if (d.append === false) {
                return;
            }
            const elem = document.createElement('div');
            const {
                id,
                view,
            } = d;
            elem.id = id;
            elem.className = 'view';
            container.appendChild(elem);
            view.renderer('canvas')
                .initialize(`#${id}`)
                .hover()
                .run();
        });
    };

    createViews(['./specs/spec4a.json'])
        // createViews(['./specs/spec4a.json', './specs/world.vg.json'])
        .then(data => addViews(data));
});

