
window.addEventListener('DOMContentLoaded', () => {

    fetch('spec3.json')
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then((spec) => {

            // const map = L.map('app').setView([51.9309303, 4.3491274], 13);
            // L.tileLayer(
            //     'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            //         attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            //         maxZoom: 18
            //     }
            // ).addTo(map);

            // const vegaLayer = L.vega(spec, {
            //     // Make sure the legend stays in place
            //     delayRepaint: true,
            // }).addTo(map);

            var view = new vega.View(vega.parse(spec)).renderer('svg').initialize('#app')
                // .hover()
                .run();

            setTimeout(() => {
                console.log(view.data('buurten'));
            }, 500);

        })
        .catch(e => console.error(e))
});