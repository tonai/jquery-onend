"use strict";

module.exports = function( grunt ) {

  grunt.initConfig( {
    jshint: {
      options: {
        jshintrc: true
      },
      app: {
        files: {
          src: [ "Gruntfile.js", "jquery.onend.js" ]
        }
      }
    },
    jscs: {
      options: {
        config: ".jscsrc"
      },
      app: {
        files: {
          src: [ "Gruntfile.js", "jquery.onend.js" ]
        }
      }
    },
    uglify: {
      app: {
        files: { "jquery.onend.min.js": "jquery.onend.js" }
      }
    }
  } );

  grunt.loadNpmTasks( "grunt-contrib-jshint" );
  grunt.loadNpmTasks( "grunt-contrib-uglify" );
  grunt.loadNpmTasks( "grunt-jscs" );

  grunt.registerTask( "default", [ "jshint", "jscs" ] );

};
