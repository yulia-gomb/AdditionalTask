const path = require('path');

module.exports = {
    entry: './script.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.[tj]s$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};