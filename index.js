'use strict';

window.addEventListener('DOMContentLoaded', function () {

    fetch('schiedam.vg.json').then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function (spec) {
        var view = new vega.View(vega.parse(spec)).renderer('svg').initialize('#schiedam')
        // .hover()
        .run();
    }).catch(function (e) {
        return console.error(e);
    });

    fetch('world.vg.json').then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function (spec) {
        var view = new vega.View(vega.parse(spec)).renderer('svg').initialize('#world')
        // .hover()
        .run();
    }).catch(function (e) {
        return console.error(e);
    });
});

