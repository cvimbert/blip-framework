/**
 * Created by Christophe on 10/03/2017.
 */
var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options 
// sets the baseURL and loads the configuration file 
var builder = new Builder('.', './systemjs.config.js');

builder
    .bundle('compiled/main.js', 'bundles/blip-framework.umd.js', { minify: true, sourceMaps: true })
    .then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.log('Build error');
        console.log(err);
    });