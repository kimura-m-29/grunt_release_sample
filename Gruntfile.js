module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compress: {
            archive: {
                options: {
                    archive: 'dist/archive.<%= pkg.version %>.zip'
                },
                files: [
                    {expand: true, src: '**/*', filter: function (filepath) {
                        var ignorePaths = [
                            'node_modules',
                            'zip',
                            'dest',
                            'Gruntfile.js',
                            'package.json'
                        ];

                        for (var i = 0, ignorePath; ignorePath = ignorePaths[i]; ++i) {
                            if (filepath.indexOf(ignorePath) > -1) {
                                return false;
                            }
                        }

                        return true;
                    }}
                ]
            }
        },
        replace: {
            version: {
                src: 'js/index.js',
                overwrite: true,
                replacements: [
                    {
                        from: /version = '.+'/g,
                        to: "version = '<%= pkg.version %>'"
                    }
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-text-replace');
};
