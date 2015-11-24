var gulp = require('gulp')
  , $    = require('gulp-load-plugins')()

$.browserSync = require('browser-sync').create()
$.wiredep     = require('wiredep').stream
$.del         = require('del')

$.loadSubtasks('tasks', gulp, $)

gulp.task('develop', [ 'clean:tmp' ], function () {
  return gulp.start([ 'serve:tmp:live' ])
})

gulp.task('default', [ 'develop' ])
