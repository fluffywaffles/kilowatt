module.exports = function (gulp, $) {
  gulp.task('wiredep', function () {
    gulp.src('src/jade/**/*.jade')
      .pipe($.wiredep())
      .pipe(gulp.dest('src/jade'))

    gulp.src('src/styles/**/*.styl')
      .pipe($.wiredep())
      .pipe(gulp.dest('src/styles'))
  })
}
