module.exports = (gulp, $) ->

  bowerFiles = require 'main-bower-files'
  fontFilter = {
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }

  gulp.task 'fonts', () ->
    gulp.src bowerFiles(fontFilter).concat 'res/fonts/**/*'
      .pipe gulp.dest '.tmp/fonts'
