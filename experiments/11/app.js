import createViews from 'vega-multi-view';
import BSON from 'bson';

const bson = new BSON();
function convertNumber(n, fromBase = 10, toBase = 10) {
    return parseInt(n.toString(), fromBase).toString(toBase);
}

// get the dataset from the body
const config = document.body.dataset.config;
console.log(config);
console.log(atob(config));
console.log(bson.deserialize(config));


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

