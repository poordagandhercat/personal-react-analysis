'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
        ]
    },
    devtool: 'source-map'
}