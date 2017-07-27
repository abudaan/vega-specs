'use strict';

window.addEventListener('DOMContentLoaded', function () {

    fetch('spec3.json').then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function (spec) {
        var view = new vega.View(vega.parse(spec)).renderer('svg').initialize('#app')
        // .hover()
        // .logLevel(vega.Debug)
        .run()
        // .addSignalListener('container_data', (name, data) => {
        //     console.log(name, data);
        // })

        setTimeout(() => {
            console.log(view.data('buurten'));
        }, 400)
    }).catch(function (e) {
        return console.error(e);
    });
});

