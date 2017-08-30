
import getPaths from '../util/config';

const {
    dataPath,
    imagePath,
} = getPaths();

const startDate = new Date(2014, 1, 1);
const endDate = new Date(2015, 1, 15);

console.log(startDate, endDate);

const signals = [
    {
        name: 'detailDomain',
        // update: '[datetime(2014, 0, 1), datetime(2015, 0, 1)]',
        value: `[${startDate}, ${endDate}]`,
    },
    {
        name: 'start_date',
        // value: `${startDate}`,
        update: 'datetime(detailDomain[0])',
    },
    {
        name: 'end_date',
        // value: `${endDate}`,
        update: 'datetime(detailDomain[1])',
    },
];

const data = [
    {
        name: 'reports',
        url: `${dataPath}combined.csv`,
        format: {
            type: 'dsv',
            delimiter: ';',
            parse: {
                dumps: 'number',
                fillperc: 'number',
                reports: 'number',
                // date: 'date'
            },
        },
        transform: [
            {
                type: 'formula',
                as: 'date2',
                expr: 'toDate(datum.date)',
            },
            {
                type: 'filter',
                // expr: 'datum.date2 > datetime(2014, 0, 1) && datum.date2 < datetime(2015, 0, 4)',
                expr: 'datum.date2 > start_date && datum.date2 < end_date',
            },
            {
                type: 'aggregate',
                groupby: ['name', 'bu_code'],
                fields: ['reports', 'dumps', 'fillperc'],
                ops: ['sum', 'sum', 'average'],
                as: ['reports', 'dumps', 'fillperc'],
            },
        ],
    },
];

const marks = [
    {
        name: 'marks',
        type: 'symbol',
        from: { data: 'reports' },
        encode: {
            update: {
                x: { scale: 'x', field: 'reports' },
                y: { scale: 'y', field: 'dumps' },
                size: { scale: 'size', field: 'fillperc' },
                shape: { value: 'circle' },
                strokeWidth: { value: 2 },
                opacity: { value: 0.5 },
                stroke: { value: '#4682b4' },
                fill: { value: 'transparent' },
            },
        },
    },
];


const projections = [
];

const scales = [
    {
        name: 'x',
        type: 'linear',
        round: true,
        nice: true,
        zero: true,
        domain: { data: 'reports', field: 'reports' },
        range: 'width',
    },
    {
        name: 'y',
        type: 'linear',
        round: true,
        nice: true,
        zero: true,
        domain: { data: 'reports', field: 'dumps' },
        range: 'height',
    },
    {
        name: 'size',
        type: 'linear',
        round: true,
        nice: false,
        zero: true,
        domain: { data: 'reports', field: 'fillperc' },
        range: [50, 400],
    },
];


const axes = [
    {
        scale: 'x',
        grid: false,
        domain: true,
        orient: 'bottom',
        tickCount: 5,
        title: 'reports',
        encode: {
            ticks: {
                enter: {
                    stroke: { value: '#ffffff' },
                },
            },
            labels: {
                enter: {
                    fill: { value: '#ffffff' },
                },
            },
            domain: {
                enter: {
                    stroke: { value: '#ffffff' },
                },
            },
        },
    },
    {
        scale: 'y',
        grid: false,
        domain: true,
        orient: 'left',
        titlePadding: 5,
        title: 'dumps',
        encode: {
            ticks: {
                enter: {
                    stroke: { value: '#ffffff' },
                },
            },
            labels: {
                enter: {
                    fill: { value: '#ffffff' },
                },
            },
            domain: {
                enter: {
                    stroke: { value: '#ffffff' },
                },
            },
        },
    },
];

export default {
    $schema: 'https://vega.github.io/schema/vega/v3.0.json',
    width: 900,
    height: 600,
    padding: { left: 40, top: 20, right: 20, bottom: 20 },
    autosize: 'none',
    axes,
    scales,
    signals,
    data,
    marks,
    projections,
};
