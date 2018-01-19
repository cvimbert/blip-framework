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
            'core': 'core/index',
            'draggable': "node_modules/gsap/src/uncompressed/utils/Draggable",
            "TweenLite": "node_modules/gsap/TweenLite",
            "CSSPlugin": "node_modules/gsap/src/uncompressed/plugins/CSSPlugin"
        },
        packages: {
            'core': {
                defaultExtension: 'js'
            }
        }
    })
})(this);