import R from 'ramda';
import { parse, View } from 'vega';
import { fetchJSON } from './fetch-helpers';

const Rx = require('rxjs/Rx');

const loadSpecs = async (urls: string[]) => {
    let i = 0;
    const specs = {};
    await Promise.all(urls.map(async (url) => {
        const spec = await fetchJSON(url);
        const view = new View(parse(spec));
        const id = `spec_${i}`;
        specs[id] = {
            spec, view,
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

    if (R.isNil(spec.fffact) || R.isNil(spec.fffact.publish)) {
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
    }, spec.fffact.publish);

    return streams;
};


const subscribeToStream = (data, streams) => {
    const {
        spec,
        view,
    } = data;

    if (R.isNil(spec.fffact) || R.isNil(spec.fffact.subscribe)) {
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
    }, spec.fffact.subscribe);
};


export default urls =>
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

                resolve(R.map(data => data.view, R.values(specs)));
            });
    });

