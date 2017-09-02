import R from 'ramda';
import L from 'leaflet';
import { parse, View } from 'vega';
import { vega as vegaTooltip } from 'vega-tooltip';

const setup = ({ spec, view, addLeaflet, addTooltip, tooltipOptions, callback }) => {
    if (R.isNil(view)) {
        console.error('no view');
        callback(null);
        return;
    }

    // console.log('hier', addTooltip, tooltipOptions);
    if (addTooltip) { // && !addLeaflet) {
        vegaTooltip(view, tooltipOptions);
    }

    // R.forEach((signal) => {
    //     view.addSignalListener(signal.name, (name, data) => {
    //         console.log(spec.description, name, data);
    //     });
    // }, spec.signals || []);


    const numDataSources = spec.data.length;
    let numLoaded = 0;
    const dataPoller = setInterval(() => {
        R.forEach((data) => {
            const loaded = view.data(data.name);
            if (loaded !== null) {
                console.log('[DATA]:', spec.description, data.name, loaded);
                numLoaded += 1;
            }
            if (numLoaded === numDataSources) {
                // console.log('all data loaded');
                clearInterval(dataPoller);
            }
        }, spec.data || []);
    }, 10);

    callback(view);
};


const createVegaView = ({ spec, id, renderer, addLeaflet, addTooltip, tooltipOptions, callback }) => {
    const view = new View(parse(spec)).renderer(renderer).initialize(`#${id}`);
    // .hover()
    // .run();

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
        const signals = spec.signals || [];
        const zoom = R.find(R.propEq('name', 'zoom'))(signals);
        const latitude = R.find(R.propEq('name', 'latitude'))(signals);
        const longitude = R.find(R.propEq('name', 'longitude'))(signals);

        if (R.isNil(zoom) || R.isNil(latitude) || R.isNil(longitude)) {
            createVegaView({ spec, id, renderer, addLeaflet, addTooltip, tooltipOptions, callback });
            return;
        }

        const map = L.map(id, {
            zoomAnimation: false,
        }).setView([latitude.value, longitude.value], zoom.value);

        L.tileLayer(
            'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
                maxZoom: 18,
            },
        ).addTo(map);

        const view = new View(parse(spec));
        L.vega(view, {
            renderer,
            // Make sure the legend stays in place
            delayRepaint: true,
        }).addTo(map);


        setTimeout(() => {
            // console.log(layer);
            // const view = layer.view;
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
