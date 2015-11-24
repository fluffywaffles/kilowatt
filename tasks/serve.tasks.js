var config = require('./.tasks.config.js')

module.exports = function (gulp, $) {
  var bsInit = function (baseDir) {
    $.browserSync.init({
      server: {
        baseDir: baseDir,
        routes: {
          '/bower_components': 'bower_components',
          '/scripts': 'src/scripts'
        }
      }
    })
  }

  gulp.task('serve:dist', config.serveTasks, function () {
    bsInit([ 'dist' ])
  })

  gulp.task('serve:tmp', config.serveTasks, function () {
    bsInit([ '.tmp', 'src' ])
  })

  gulp.task('serve:tmp:live', [ 'serve:tmp' ], function () {
    gulp.start('watch')
  })

  gulp.task('serve:dist:live', [ 'serve:dist' ], function () {
    gulp.start('watch')
  })
}
