module.exports = function (gulp, $) {

  var reload = $.browserSync.reload

  function plumbMappedOutRly (gulpFiles, compiler, dest) {
    return gulpFiles
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe(compiler)
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(dest))
      .pipe(reload({ stream: true }))
  }

  gulp.task('jade', function () {
    var jadeFiles = gulp.src([
      'src/jade/**/*.jade',
      '!src/jade/{includes,includes/**}'
    ])
    return plumbMappedOutRly(jadeFiles, $.jade({ pretty: true }), 'dist')
  })

  gulp.task('stylus', function () {
    var stylusFiles = gulp.src('src/styles/main.styl')
    return plumbMappedOutRly(stylusFiles, $.stylus(), '.tmp/styles')
  })

  gulp.task('sass', function () {
    var sassFiles = gulp.src('src/styles/main.{scss,sass}')
    return plumbMappedOutRly(sassFiles,
                             $.sass.sync({ pretty: true }),
                             '.tmp/styles')
  })
}
