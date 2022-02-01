"use strict";
module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: __dirname + './dist'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    }
};
