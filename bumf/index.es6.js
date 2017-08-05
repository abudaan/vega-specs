
const L = window.L; // coding like it is 1999

window.addEventListener('DOMContentLoaded', () => {

    fetch('schiedam.vg.json')
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then((spec) => {
            const map = L.map('app');
            let tiles = L.tileLayer(
                'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                    attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
                    maxZoom: 18
                }
            )
            const vegaLayer = L.vegaLayer(spec).addTo(map);

            vegaLayer.renderer('svg')
            .logLevel(vega.Debug)
            // .run();
        })
        .catch(e => console.error(e))
});