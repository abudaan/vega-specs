import R from 'ramda';
import L from 'leaflet';
import { parse, View } from 'vega';
import { vega as vegaTooltip } from 'vega-tooltip';
import { fetchJSON } from './fetch-helpers';
import initLeafletVega from './leaflet-vega';

const Rx = require('rxjs/Rx');

initLeafletVega();

export const createLeafletVega = async (id, spec, view) => {
    const signals = spec.signals || [];
    const zoom = R.find(R.propEq('name', 'zoom'))(signals);
    const latitude = R.find(R.propEq('name', 'latitude'))(signals);
    const longitude = R.find(R.propEq('name', 'longitude'))(signals);

    if (R.isNil(zoom) || R.isNil(latitude) || R.isNil(longitude)) {
        console.error('incomplete map spec');
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

    L.vega(view, {
        renderer: spec.runtime.renderer || 'canvas',
        // Make sure the legend stays in place
        delayRepaint: true,
    }).addTo(map);
};


const loadSpecs = async (urls: string[]) => {
    let i = 0;
    const specs = {};
    await Promise.all(urls.map(async (url) => {
        const spec = await fetchJSON(url);
        const id = `spec_${i}`;
        const view = new View(parse(spec));
        specs[id] = {
            id,
            spec,
            view,
        };
        i += 1;
    }));
    return specs;
};


const createStream = (data) => {
    const {
        spec,
        view,
    } = data;

    const streams = {};

    if (R.isNil(spec.runtime) || R.isNil(spec.runtime.publish)) {
        return streams;
    }

    R.forEach((publish) => {
        try {
            const s = new Rx.Subject();
            view.addSignalListener(publish.signal, (name, value) => {
                s.next(value);
            });
            streams[publish.as] = s;
        } catch (e) {
            console.error(e.message);
        }
    }, spec.runtime.publish);

    return streams;
};


const subscribeToStream = (data, streams) => {
    const {
        spec,
        view,
    } = data;

    if (R.isNil(spec.runtime) || R.isNil(spec.runtime.subscribe)) {
        return;
    }

    R.forEach((subscribe) => {
        const s = streams[subscribe.signal];
        if (R.isNil(s)) {
            console.error(`no stream for signal ${subscribe.signal}`);
            return;
        }
        s.subscribe((value) => {
            view.signal(subscribe.as, value);
        });
    }, spec.runtime.subscribe);
};


export const createViews = urls =>
    new Promise((resolve, reject) => {
        loadSpecs(urls)
            .then((specs) => {
                let streams = {};
                R.forEach((spec) => {
                    streams = { ...streams, ...createStream(spec) };
                }, R.values(specs));

                R.forEach((spec) => {
                    subscribeToStream(spec, streams);
                }, R.values(specs));

                resolve(R.map(id => specs[id], R.keys(specs)));
            });
    });

