import { createViews, createLeafletVega } from './util/create-vega-views';

window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const addViews = (data) => {
        data.forEach((d) => {
            const elem = document.createElement('div');
            const {
                id,
                spec,
                view,
            } = d;
            elem.id = id;
            elem.className = 'view';
            container.appendChild(elem);

            if (spec.runtime.leaflet === true) {
                createLeafletVega(id, spec, view);
            } else {
                view.renderer(spec.runtime.renderer || 'canvas')
                    .initialize(`#${id}`);
            }
        });
    };

    const specs = [
        './specs/world.vg.json',
        // './specs/spec4a.json',
    ];
    createViews(specs)
        .then(data => addViews(data));
});

