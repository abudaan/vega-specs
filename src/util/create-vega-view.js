// import L from 'leaflet';
// import vega from 'vega';
// import LeafletVega from './leaflet-vega';
import R from 'ramda';

const vega = window.vega;
const vegaTooltip = window.vegaTooltip;
const L = window.L;

const setup = ({ spec, view, addLeaflet, addTooltip, tooltipOptions, callback }) => {
    if (R.isNil(view)) {
        console.error('no view');
        callback(null);
        return;
    }

    if (addTooltip && !addLeaflet) {
        vegaTooltip.vega(view, tooltipOptions);
    }

    R.forEach((signal) => {
        view.addSignalListener(signal.name, (name, data) => {
            console.log(name, data);
        });
    }, spec.signals);

    setTimeout(() => {
        R.forEach((data) => {
            console.log(data.name, view.data(data.name));
        }, spec.data);
    }, 300);

    callback(view);
};


const createVegaView = ({ spec, id, renderer, addLeaflet, addTooltip, tooltipOptions, callback }) => {
    const view = new vega.View(vega.parse(spec)).renderer(renderer).initialize(`#${id}`)
        .hover()
        .run();

    setup({
        spec,
        view,
        addLeaflet,
        addTooltip,
        tooltipOptions,
        callback,
    });
};


export default ({ spec, id, renderer = 'canvas', addLeaflet = false, addTooltip = false, tooltipOptions = {}, callback = () => { } }) => {
    if (addLeaflet) {
        const zoom = R.find(R.propEq('name', 'zoom'))(spec.signals);
        const latitude = R.find(R.propEq('name', 'latitude'))(spec.signals);
        const longitude = R.find(R.propEq('name', 'longitude'))(spec.signals);

        if (R.isNil(zoom) || R.isNil(latitude) || R.isNil(longitude)) {
            createVegaView({ spec, id, renderer, addLeaflet, addTooltip, tooltipOptions, callback });
            return;
        }

        const map = L.map(id, {
            zoomAnimation: false,
        }).setView([latitude.value, longitude.value], zoom.value);

        delete spec.projections;

        L.tileLayer(
            'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
                maxZoom: 18,
            },
        ).addTo(map);

        const layer = L.vega(spec, {
            renderer,
            // Make sure the legend stays in place
            delayRepaint: true,
        }).addTo(map);

        setTimeout(() => {
            const view = layer._view;
            setup({
                spec,
                view,
                addLeaflet,
                addTooltip,
                tooltipOptions,
                callback,
            });
        }, 0);
    } else {
        createVegaView({ spec, id, renderer, addLeaflet, addTooltip, tooltipOptions, callback });
    }
};
