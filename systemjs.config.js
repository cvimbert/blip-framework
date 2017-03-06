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
            src: "src",
            'rxjs': 'npm:rxjs'
        },
        packages: {
            src: {
                main: '../compiled/graphs.js',
                defaultExtension: 'js'
            }
        }
    })
})(this);