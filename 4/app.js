import R from 'ramda';
import spec from '../src/specs/spec4';
import createView from '../src/js/util/create-vega-view';
import generateSpec from '../src/js/util/generate-spec';
import initLeafletVega from '../src/js/util/leaflet-vega';

initLeafletVega();

// Vega rendering a map using leaflet-vega

window.addEventListener('DOMContentLoaded', () => {


    const tooltip = document.createElement('div');
    tooltip.style.position = 'absolute';
    tooltip.style.zIndex = 1000;
    // tooltip.style.width = '100px';
    // tooltip.style.height = '100px';
    tooltip.style.backgroundColor = 'white';
    tooltip.style.top = '-100px';
    tooltip.style.left = '100px';
    tooltip.style.color = '#000';
    tooltip.style.textAlign = 'center';
    tooltip.style.padding = '10px';
    tooltip.innerHTML = 'I am Tip, Tool Tip';
    document.body.appendChild(tooltip);

    createView({
        spec,
        id: 'app',
        renderer: 'canvas',
        addLeaflet: true,
        addTooltip: true,
        tooltipOptions: {
            showAllFields: false,
            fields: [
                {
                    formatType: 'string',
                    field: 'properties.NAAM',
                    title: 'buurt',
                },
                {
                    formatType: 'string',
                    field: 'properties.CODE',
                    title: 'code',
                },
                {
                    formatType: 'string',
                    field: 'properties.TYPE',
                    title: 'type',
                },
            ],
        },
        callback: (view) => {
            // view.hover();
        //     view.tooltipHandler((event, item, name) => {
        //         console.log(event);
        //         if (event.vegaType === 'mouseover') {
        //             tooltip.style.top = `${event.clientY}px`;
        //             tooltip.style.left = `${event.clientX + 20}px`;
        //             tooltip.innerHTML = name;
        //             // tooltip.innerHTML += `<br>${item.datum.fillperc}%`;
        //         } else {
        //             tooltip.style.top = '-1000px';
        //             tooltip.innerHTML = '';
        //         }
        //     });
        },
    });


    document.getElementById('generate-spec')
    .addEventListener('click', () => generateSpec(spec));
});
