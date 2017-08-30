import getPaths from '../util/config';

const {
    dataPath,
    imagePath,
} = getPaths();


const data = [
    {
        name: 'reports',
        url: `${dataPath}combined.csv`,
        format: {
            type: 'dsv',
            delimiter: ';',
            parse: {
                date: 'date',
            },
        },
        transform: [
            // {
            //     type: 'formula',
            //     as: 'year_month',
            //     expr: 'year(datum.date) + "_" + (month(datum.date) + 1)',
            // },
            // {
            //     type: 'formula',
            //     as: 'month',
            //     expr: 'month(datum.date)',
            // },
            // {
            //     type: 'extent',
            //     field: 'year',
            //     signal: 'extent',
            // },
            {
                type: 'aggregate',
                groupby: ['date'],
            },
            // {
            //     type: 'formula',
            //     as: 'count',
            //     expr: 'datum.count / 100',
            // },
        ],
    },
];


const signals = [
    {
        name: 'brush',
        value: 0,
        on: [
            {
                events: 'mousedown',
                update: '[x(), x()]',
            },
            {
                events: '[mousedown, window:mouseup] > window:mousemove!',
                update: '[brush[0], clamp(x(), 0, width)]',
            },
            {
                events: { signal: 'delta' },
                update: 'clampRange([anchor[0] + delta, anchor[1] + delta], 0, width)',
            },
        ],
    },
    {
        name: 'anchor',
        value: null,
        on: [{ events: '@brush:mousedown', update: 'slice(brush)' }],
    },
    {
        name: 'xdown',
        value: 0,
        on: [{ events: '@brush:mousedown', update: 'x()' }],
    },
    {
        name: 'delta',
        value: 0,
        on: [
            {
                events: '[@brush:mousedown, window:mouseup] > window:mousemove!',
                update: 'x() - xdown',
            },
        ],
    },
    {
        name: 'detailDomain',
        on: [
            {
                events: { signal: 'brush' },
                // update: "span(brush) ? invert('xOverview', brush) : [datetime(2014, 0, 1), datetime(2014, 0, 15)]",
                update: "span(brush) ? invert('xOverview', brush) : null",
                // update: "invert('xOverview', brush)",
                // update: 'brush',
            },
        ],
    },

];


const scales = [
    {
        name: 'xOverview',
        type: 'time',
        range: [0, { signal: 'width' }],
        domain: { data: 'reports', field: 'date' },
    },
    {
        name: 'yOverview',
        domain: { data: 'reports', field: 'count' },
        type: 'linear',
        range: [{ signal: 'height' }, 0],
        nice: true,
        zero: true,
    },
];


const axes = [
    {
        orient: 'bottom',
        scale: 'xOverview',
        encode: {
            ticks: {
                enter: {
                    stroke: { value: 'white' },
                },
            },
            domain: {
                enter: {
                    stroke: { value: 'white' },
                },
            },
            labels: {
                enter: {
                    fill: { value: 'white' },
                },
            },
        },
    },
    {
        orient: 'left',
        scale: 'yOverview',
        encode: {
            ticks: {
                enter: {
                    stroke: { value: 'white' },
                },
            },
            domain: {
                enter: {
                    stroke: { value: 'white' },
                },
            },
            labels: {
                enter: {
                    fill: { value: 'white' },
                },
            },
        },
    },
];


const marks = [
    {
        type: 'rect',
        from: { data: 'reports' },
        interactive: false,
        encode: {
            update: {
                x: { scale: 'xOverview', field: 'date' },
                // width: { scale: 'xOverview' },
                width: { value: 2 },
                y: { scale: 'yOverview', field: 'count' },
                // y: { scale: 'yOverview', value: 1 },
                y2: { scale: 'yOverview', value: 0 },
                fill: { value: 'steelblue' },
            },
        },
    },
    {
        type: 'rect',
        name: 'brush',
        encode: {
            enter: {
                y: { value: 0 },
                height: { value: 70 },
                fill: { value: '#333' },
                fillOpacity: { value: 0.2 },
            },
            update: {
                x: { signal: 'brush[0]' },
                x2: { signal: 'brush[1]' },
            },
        },
    },
    {
        type: 'rect',
        interactive: false,
        encode: {
            enter: {
                y: { value: 0 },
                height: { value: 70 },
                width: { value: 1 },
                fill: { value: 'firebrick' },
            },
            update: {
                x: { signal: 'brush[0]' },
            },
        },
    },
    {
        type: 'rect',
        interactive: false,
        encode: {
            enter: {
                y: { value: 0 },
                height: { value: 70 },
                width: { value: 1 },
                fill: { value: 'yellow' },
            },
            update: {
                x: { signal: 'brush[1]' },
            },
        },
    },
];


export default {
    $schema: 'https://vega.github.io/schema/vega/v3.0.json',
    width: 720,
    height: 70,
    padding: 30,
    autosize: 'none',
    scales,
    signals,
    axes,
    data,
    marks,
    projections: [],
};
