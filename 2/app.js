// import { Observable } from 'rxjs-es/Observable';
// import 'rxjs-es/add/observable/of';
// import 'rxjs-es/add/operator/map';
import xs from 'xstream';
import spec from '../src/specs/spec5';
import createView from '../src/js/util/create-vega-view';
import generateSpec from '../src/js/util/generate-spec';

const Rx = require('rxjs/Rx');

// Vega using webfonts and show how you can update css properties after the spec
// has been rendered

window.addEventListener('DOMContentLoaded', () => {
    createView({
        spec,
        id: 'app',
        renderer: 'svg',
        addLeaflet: false,
        addTooltip: false,
        tooltipOptions: {},
        callback: (view) => {
            // const callback = view.addSignalListener(
            //     'mouse_xy',
            //     (name, value) => {
            //         // console.log(name);
            //         return value;
            //     },
            // );
            // const exists = Rx.Observable.bindCallback(view.addSignalListener);
            // exists('mouse_xy',
            // (name, value) => {
            //     console.log(name);
            //     return value;
            // }).subscribe(value => console.log(value));


            // yaml: publish mouse_xy as mouse
            const mouse = new Rx.Subject();

            view.addSignalListener('mouse_xy', (name, value) => {
                console.log(Date.now(), value);
                mouse.next(value);
            });


            // yaml: subscribe mouse as mouse_pos
            mouse.subscribe((value) => {
                console.log(Date.now(), value);
                // view2.signal('mouse_pos', value);
            });

            view.addSignalListener('update_css', (name, value) => {
                if (value === 0) {
                    document.querySelectorAll('.text-webfont text').forEach((element) => {
                        element.style.fill = 'red';
                        element.style.fontFamily = 'Butcherman Caps';
                        element.style.fontSize = 40;
                    });
                } else {
                    document.querySelectorAll('.text-webfont text').forEach((element) => {
                        element.style.fill = 'white';
                        element.style.fontFamily = 'sans-serif';
                        element.style.fontSize = 25;
                    });
                }
            });
        },
    });

    document.getElementById('generate-spec')
    .addEventListener('click', () => generateSpec(spec));
});
