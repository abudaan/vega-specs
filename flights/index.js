'use strict';

window.addEventListener('DOMContentLoaded', function () {

    fetch('airport-connections.vg.json').then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function (spec) {
        var view = new vega.View(vega.parse(spec)).renderer('svg').initialize('#app')
        // .hover()
        .run();
    }).catch(function (e) {
        return console.error(e);
    });
});

