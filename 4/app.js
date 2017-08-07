import R from 'ramda';
import spec from '../src/specs/spec4';
import createView from '../src/util/create-vega-view';
import generateSpec from '../src/util/generate-spec';

// Vega rendering a map using leaflet-vega

window.addEventListener('DOMContentLoaded', () => {
    createView({
        spec,
        id: 'app',
        renderer: 'canvas',
        addLeaflet: true,
        addTooltip: false,
        tooltipOptions: {},
    });

    document.getElementById('generate-spec')
    .addEventListener('click', () => generateSpec(spec));
});
