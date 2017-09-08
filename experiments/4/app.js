import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec from '../../specs/spec4';


// Vega rendering a map using leaflet-vega

const spec = generateSpec({
    dataPath: '../../data/',
    imagePath: '../../img/',
});

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

createViews({ specs: spec, element: 'app' })
    .then((result) => {
        const view = result[0].view;
        view.hover();
        console.log(view.hover);
        view.tooltipHandler((event, item, name) => {
            console.log(event);
            if (event.vegaType === 'mouseover') {
                tooltip.style.top = `${event.clientY}px`;
                tooltip.style.left = `${event.clientX + 20}px`;
                tooltip.innerHTML = name;
                // tooltip.innerHTML += `<br>${item.datum.fillperc}%`;
            } else {
                tooltip.style.top = '-1000px';
                tooltip.innerHTML = '';
            }
        });
    });

document.getElementById('generate-spec')
    .addEventListener('click', () => showSpecInTab(spec));

