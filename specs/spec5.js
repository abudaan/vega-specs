const dataPath = `${window.location.protocol}//${window.location.host}/data/`;
const imagePath = `${window.location.protocol}//${window.location.host}/img/`;

const signals = [
    {
        name: 'mouse_xy',
        on: [
            {
                events: {
                    type: 'mousemove',
                    target: 'window',
                    throttle: 10,
                },
                update: 'xy()',
            },
        ],
    },
];


const data = [

];

const marks = [
    {
        type: 'text',
        encode: {
            enter: {
                align: {
                    value: 'left',
                },
                fill: {
                    value: 'white',
                },
                font: {
                    value: 'Butcherman Caps',
                },
                fontSize: {
                    value: 25,
                },
            },
            update: {
                text: {
                    value: 'Vega using webfonts',
                },
                x: {
                    signal: 'mouse_xy[0]',
                },
                y: {
                    signal: 'mouse_xy[1]',
                },
            },
        },
    },
];


const projections = [

];

const scales = [
];


export default {
    $schema: 'https://vega.github.io/schema/vega/v3.0.json',
    width: 720,
    height: 720,
    autosize: 'none',
    scales,
    signals,
    data,
    marks,
    projections,
};
