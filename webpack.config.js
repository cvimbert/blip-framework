/**
 * Created by Christophe on 25/10/2017.
 */
var webpack = require("webpack");

module.exports = {
    entry: './core/index.ts',
    output: {
        filename: "./dist/blip.umd.js",
        libraryTarget: 'umd',
        library: "octopus-model"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts"]
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: "ts-loader" }
        ]
    }
};