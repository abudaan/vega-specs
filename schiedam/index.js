
window.addEventListener('DOMContentLoaded', () => {

    // function addVgExample(path, id, options, tooltip = true) {
    //     d3.json(path, function (error, vgSpec) {
    //         if (error) {
    //             return console.error(error);
    //         }
    //         var runtime = vega.parse(vgSpec);
    //         var view = new vega.View(runtime)
    //             .initialize(document.querySelector(id))
    //             .hover()
    //             .run();
    //         if (tooltip === true) {
    //             vegaTooltip.vega(view, options);
    //         } else {
    //             console.log('noop');
    //         }
    //     })


    fetch('spec3a.json')
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then((spec) => {

            const map = L.map('app').setView([51.9309303, 4.3491274], 12);

            L.tileLayer(
                'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                    attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
                    maxZoom: 18
                }
            ).addTo(map);

            const l = L.vega(spec, {
                // Make sure the legend stays in place
                renderer: 'svg',
                delayRepaint: true,
            })
            map.on('layeradd', function (e) {
                setTimeout(function () {
                    // console.log('layer', e.layer);
                    // console.log('spec', e.layer._spec);
                    // console.log('map', e.layer._map);
                    // console.log('view', e.layer._view);
                    vegaTooltip.vega(e.layer._view, {
                        showAllFields: false,
                        fields: [
                            {
                                formatType: "number",
                                field: "stortingen"
                            },
                            {
                                formatType: "number",
                                field: "vulling"
                            },
                            {
                                formatType: "number",
                                field: "meldingen"
                            }
                        ]
                    });
                }, 0)
            })
            arr = l.addTo(map);
            // console.log(arr);
            // setTimeout(function(){
            //     var view = arr[1];
            //     vegaTooltip.vega(view);
            // }, 1000)

            // var i = 0;
            // var checker = setInterval(function(){
            //     if(document.querySelectorAll('.mark-text text').length > 0){
            //         document.querySelectorAll('.mark-text text').forEach(function(element){
            //             element.style.fill = 'red';
            //         });
            //         clearInterval(checker);
            //     }
            //     i++;
            //     console.log('not yet rendered: ' + i)
            // }, 1)

            // console.log(vegaLayer);

            // view.runAfter

            // var view = new vega.View(vega.parse(spec)).renderer('svg').initialize('#app')
            //     .hover()
            //     .run()

            // var i = 0;
            // var checker = setInterval(function(){
            //     if(document.querySelectorAll('.mark-text text').length > 0){
            //         document.querySelectorAll('.mark-text text').forEach(function(element){
            //             element.style.fill = 'red';
            //         });
            //         clearInterval(checker);
            //     }
            //     i++;
            //     console.log('not yet rendered: ' + i)
            // }, 1)

            // try {
            //     view.addSignalListener('data', function (name, data) {
            //         console.log(data);
            //     });
            // } catch (e) {
            //     console.log(e);
            // }

            // setTimeout(() => {
            //     try {
            //         console.log('data', view.data('data'));
            //     } catch (e) {
            //         console.log(e);
            //     }
            //     try {
            //         console.log('buurten', view.data('buurten'));
            //     } catch (e) {
            //         console.log(e);
            //     }
            // }, 500);

        })
        .catch(e => console.error(e))
});