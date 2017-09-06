import spec from '../src/specs/spec5a';
import createView from '../src/js/util/create-vega-view';
import generateSpec from '../src/js/util/generate-spec';

// Vega using webfonts and show how you can update css properties after the spec
// has been rendered (using canvas renderer, see the spec how this is done).

window.addEventListener('DOMContentLoaded', () => {
    createView({
        spec,
        id: 'app',
        renderer: 'canvas',
        addLeaflet: false,
        addTooltip: false,
        tooltipOptions: {},
    });

    document.getElementById('generate-spec')
    .addEventListener('click', () => generateSpec(spec));
});
