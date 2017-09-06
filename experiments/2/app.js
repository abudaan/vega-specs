import createViews from 'vega-multi-view';
import spec from '../../specs/spec5';
import generateSpec from '../../src/js/util/generate-spec';

// Vega using webfonts and show how you can update css properties after the spec
// has been rendered

window.addEventListener('DOMContentLoaded', () => {
    createViews({
        spec: spec.default(),
        id: 'app',
        renderer: 'svg',
        addLeaflet: false,
        addTooltip: false,
        tooltipOptions: {},
        callback: (view) => {
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
