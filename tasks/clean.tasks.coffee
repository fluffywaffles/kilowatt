module.exports = (gulp, $) ->
  gulp.task 'clean:tmp', () ->
    $.del '.tmp'

  gulp.task 'clean:dist', () ->
    $.del 'dest'

  gulp.task 'cache:clear', (done) ->
    $.cache.clearAll done

  gulp.task 'clean', [ 'clean:tmp', 'clean:dist' ]
