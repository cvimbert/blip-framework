/**
 * Created by Christophe on 31/01/2017.
 */

(function (global) {
    System.config({
        defaultJSExtensions: true,
        map: {
            src: "src"
        },
        packages: {
            src: {
                main: '../compiled/main.js',
                defaultExtension: 'js'
            }
        }
    })
})(this);