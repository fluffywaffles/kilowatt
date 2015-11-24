module.exports = function (gulp, $) {
  gulp.task('watch:bower', function () {
    gulp.watch('bower.json', [ 'wiredep', 'fonts' ])
  })

  gulp.task('watch:fonts', function () {
    gulp.watch('res/fonts/**/*', [ 'fonts' ])
  })

  gulp.task('watch:compile', function () {
    gulp.watch('src/jade/**/*.jade', [ 'jade' ])
    gulp.watch('src/styles/**/*.styl', [ 'stylus' ])
  })

  gulp.task('watch:images', function () {
    gulp.watch('res/images/**/*', [ 'images' ])
  })

  gulp.task('watch', [
    'watch:images',
    'watch:compile',
    'watch:fonts',
    'watch:bower'
  ])
}
