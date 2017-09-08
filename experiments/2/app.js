import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec from '../../specs/spec5';

// Vega using webfonts and show how you can update css properties after the spec
// has been rendered

window.addEventListener('DOMContentLoaded', () => {
    const spec = generateSpec();
    spec.runtime = {
        element: 'app',
        run: true,
    };
    const data = {
        specs: spec,
        renderer: 'svg',
        debug: true,
    };

    createViews(data)
        .then(
        (result) => {
            const view = result[0].view;
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
        (error) => {
            console.log(error);
        },
    );

    document.getElementById('show-spec')
        .addEventListener('click', () => showSpecInTab(spec));
});
