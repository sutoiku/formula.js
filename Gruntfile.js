module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      dev: {
        files: {
          'build/bundle.js': 'lib/formula.js'
        },
        options: {
          bundleOptions: {
            standalone: 'Formula'
          },
          plugin: [
            ['minifyify', {
              map: 'bundle.map',
              output: 'build/bundle.map'
            }]
          ]
        }
      },
      production: {
        files: {
          'build/bundle.js': 'lib/formula.js'
        },
        options: {
          bundleOptions: {
            standalone: 'Formula'
          },
          plugin: [
            ['minifyify', {
              minify: {
                compress: {
                  drop_console: true
                }
              }
            }]
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify:production']);
};