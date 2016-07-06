module.exports = function (grunt) {
    grunt.initConfig({

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'jasmine/spec/*.js'
                    ]
                },
                options: {
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }

    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync']);

};