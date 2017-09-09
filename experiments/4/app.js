import createViews, { showSpecInTab } from 'vega-multi-view';
import generateSpec from '../../specs/spec4b';


// Vega rendering a map using leaflet-vega

const spec = generateSpec({
    dataPath: '../../data/',
    imagePath: '../../img/',
});

const tooltipText = document.createElement('div');
tooltipText.style.position = 'relative';
tooltipText.style.width = '100%';
tooltipText.innerHTML = 'I am Tip, Tool Tip';

const tooltip = document.createElement('div');
tooltip.style.position = 'absolute';
tooltip.style.zIndex = 1000;
tooltip.style.backgroundColor = 'white';
tooltip.style.top = '20px';
tooltip.style.right = '20px';
tooltip.style.color = '#000';
tooltip.style.textAlign = 'center';
tooltip.style.padding = '10px';
tooltip.appendChild(tooltipText);
document.body.appendChild(tooltip);

createViews({ specs: spec, element: 'app' })
    .then((result) => {
        const view = result[0].view;
        view.hover();
        view.tooltipHandler((event, item, name) => {
            console.log(event);
            if (item) {
                // console.log('[TOOLTIP]', item);
                tooltip.style.top = `${event.clientY}px`;
                tooltip.style.left = `${event.clientX + 20}px`;
                tooltipText.innerHTML = item.datum.properties.NAAM;
                // tooltip.innerHTML += `<br>${item.datum.properties.}%`;
            } else {
                tooltip.style.top = '20px';
                tooltip.style.right = '20px';
                tooltipText.innerHTML = 'I am Tip, Tool Tip';
            }
        });
    });

document.getElementById('generate-spec')
    .addEventListener('click', () => showSpecInTab(spec));

