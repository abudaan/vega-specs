import createViews from './util/create-vega-views';

createViews(['./specs/spec4a.json', './specs/world.vg.json'])
    .then(data => console.log(data));

