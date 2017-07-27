window.addEventListener('DOMContentLoaded', () => {

    fetch('schiedam.vg.json')
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((spec) => {
        const view = new vega.View(vega.parse(spec))
        .renderer('svg')
        .initialize('#schiedam')
        // .hover()
        .run();
    })
    .catch(e => console.error(e))

    fetch('world.vg.json')
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((spec) => {
        const view = new vega.View(vega.parse(spec))
        .renderer('svg')
        .initialize('#world')
        // .hover()
        .run();
    })
    .catch(e => console.error(e))
});