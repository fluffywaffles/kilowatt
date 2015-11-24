var config = require('./.tasks.config.js')

module.exports = function (gulp, $) {
  gulp.task('build', config.buildTasks, function () {
    return gulp.src('.tmp/**/*')
      .pipe(gulp.dest('dist'))
  })
}
