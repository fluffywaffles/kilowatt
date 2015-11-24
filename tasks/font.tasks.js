module.exports = function (gulp, $) {

  var bowerFiles = require('main-bower-files')
  var fontFilter = {
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }

  gulp.task('fonts', function () {
    return gulp.src(bowerFiles(fontFilter).concat('res/fonts/**/*'))
      .pipe(gulp.dest('.tmp/fonts'))
  })
}
