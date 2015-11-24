module.exports = function (gulp, $) {
  gulp.task('images', function () {
    return gulp.src('res/images/**/*')
      .pipe($.cache($.imagemin({
        progressive: true,
        interlaced: true,
        svgoPlugins: [{
          cleanupIDs: false
        }]
      })))
      .pipe(gulp.dest('.tmp/images'))
  })
}
