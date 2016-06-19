module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          ui: 'bdd',
          require: './specs/helpers/chai'
        },
        src: ['specs/**/*.js']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');

};
