/**
 * Created by reunion on 23/11/2016.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        systemjs: {
            options: {
                sfx: true,
                baseURL: ".",
                configFile: "./systemjs.config.js",
                minify: true,
                preserveComments: false,
                build: {
                    mangle: true
                },
                sourceMaps: true
            },
            build: {
                options: {
                    sourceMaps: true,
                    build: {
                        mangle: false
                    }
                },
                files: [{
                    "src":  "./compiled/graphs.js",
                    "dest": "./bundles/blip-framework.umd.js"
                }]
            }
        }
    });

    grunt.loadNpmTasks("grunt-systemjs-builder");

};