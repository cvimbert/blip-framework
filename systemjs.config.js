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
            'core': 'core/bundles/core.umd.js',
            //'core': 'compiled/core/index.js',
        },
        packages: {
            'core': {
                defaultExtension: 'js'
            }
        }
    })
})(this);