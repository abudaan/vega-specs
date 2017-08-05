// import vega from 'vega';
import L from 'leaflet';

const vega = window.vega;

export default (spec, id, withMap, callback) => {
    if (withMap) {
        const map = L.map(id).setView([51.9309303, 4.3491274], 13);
        delete spec.projections;

        L.tileLayer(
            'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
                maxZoom: 18,
            },
        ).addTo(map);

        const layer = L.vega(spec, {
            renderer: 'svg',
            // Make sure the legend stays in place
            delayRepaint: true,
        }).addTo(map);

        setTimeout(() => {
            callback(layer._view);
        }, 0);
    } else {
        const view = new vega.View(vega.parse(spec)).renderer('svg').initialize(`#${id}`)
            .hover()
            .run();

        callback(view);
    }
};
