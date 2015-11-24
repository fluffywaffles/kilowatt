module.exports = function (gulp, $) {
  gulp.task('clean:tmp', function () {
    return $.del('.tmp')
  })

  gulp.task('clean:dist', function () {
    return $.del('dist')
  })

  gulp.task('cache:clear', function (done) {
    return $.cache.clearAll(done)
  })

  gulp.task('clean', [ 'clean:tmp', 'clean:dist' ])
}
