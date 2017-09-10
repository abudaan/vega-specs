import createViews from 'vega-multi-view';

// get the dataset from the body
const config = document.body.dataset.config;
console.log(config);
// try to parse it to javascript
let data;
try {
    data = JSON.parse(config);
} catch (e) {
    console.error(e);
}
console.log(data);
// create the views
createViews(data)
    .then((result) => {
        // do other stuff
        console.log(result);
    });

