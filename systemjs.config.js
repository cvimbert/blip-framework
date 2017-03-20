/**
 * Created by Christophe on 31/01/2017.
 */

(function (global) {
    System.config({
        defaultJSExtensions: true,
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            examples: "examples",
            'blip-framework/core': 'src/core/bundles/core.umd.js',
        },
        packages: {
            examples: {
                main: 'examples/main.js',
                defaultExtension: 'js'
            }
        }
    })
})(this);