
import getPaths from '../util/config';

const {
    dataPath,
    imagePath,
} = getPaths();

const signals = [
    {
        name: 'start_date',
        value: 'datetime(2014, 0, 1)',
    },
    {
        name: 'end_date',
        value: 'datetime(2015, 2, 1)',
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
                meldingen: 'number',
                // date: 'date'
            },
        },
        transform: [
            // {
            //     type: 'geopoint',
            //     projection: 'projection',
            //     fields: [
            //         'x',
            //         'y',
            //     ],
            //     as: [
            //         'x2',
            //         'y2',
            //     ],
            // },
            {
                type: 'formula',
                as: 'date2',
                expr: 'toDate(datum.date)',
            },
            {
                type: 'filter',
                // expr: 'datum.date > 1435269600000',
                expr: 'datum.date2 > datetime(2014, 0, 1) && datum.date2 < datetime(2014, 0, 4)',
            },
            // {
            //     type: 'formula',
            //     as: 'meldingen',
            //     expr: 'toNumber(datum.meldingen)',
            // },
            // {
            //     type: 'formula',
            //     as: 'dumps',
            //     expr: 'toNumber(datum.dumps)',
            // },
            // {
            //     type: 'aggregate',
            //     fields: ['meldingen', 'dumps'],
            //     ops: ['sum', 'sum'],
            //     as: ['meldingen', 'dumps'],
            // },
        ],
    },
];

const marks = [

];


const projections = [
];

const scales = [
    {
        name: 'date_scale',
        type: 'time',
        domain: {
            data: 'reports',
            field: 'datetime',
        },
        range: [0, 100],
    },
];


export default {
    $schema: 'https://vega.github.io/schema/vega/v3.0.json',
    width: 900,
    height: 600,
    autosize: 'none',
    scales,
    signals,
    data,
    marks,
    projections,
};
