gulp        = require 'gulp'
browserSync = require 'browser-sync'
wiredep     = require 'wiredep'
del         = require 'del'

$ = (require 'gulp-load-plugins')()
$.browserSync = browserSync
$.wiredep     = wiredep
$.del         = del

$.loadSubtasks = (require 'gulp-load-subtasks/coffee')

$.loadSubtasks 'tasks', gulp, $

gulp.task 'develop', [ 'clean:tmp' ], ->
  gulp.start [ 'serve:tmp:live' ]

gulp.task 'default', [ 'develop' ]
