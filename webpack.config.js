const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './index.js',
    ],
    output: {
        path: path.resolve(__dirname, '8/build'),
        filename: 'app.js',
    },
    context: path.resolve(__dirname, 'src/js'),
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src/js'),
            },
            // {
            //     test: /\.json?$/,
            //     loader: 'json-loader',
            //     exclude: /node_modules/,
            // },
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src/js'),
            'node_modules',
        ],
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
    ],
};