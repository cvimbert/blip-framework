/**
 * Created by Christophe on 25/10/2017.
 */
var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './core/index.ts',
    output: {
        filename: "./dist/blip.umd.js",
        libraryTarget: 'umd',
        library: "Blip"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".ts"],
        alias: {
            //TweenLite: path.resolve(__dirname, 'node_modules/gsap/src/uncompressed/TweenLite.js'),
            //draggable: path.resolve(__dirname, 'node_modules/gsap/src/uncompressed/utils/Draggable.js'),
            //"plugins.CSSPlugin": path.resolve(__dirname, 'node_modules/gsap/src/uncompressed/plugins/CSSPlugin.js')
        }
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: "ts-loader" }
        ]
    }

};