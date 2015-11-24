module.exports = (gulp, $) ->
  gulp.task 'images', () ->
    gulp.src 'res/images/**/*'
      .pipe $.cache $.imagemin {
        progressive: true,
        interlaced: true,
        svgoPlugins: [{
          cleanupIDs: false
        }]
      }
      .pipe gulp.dest '.tmp/images'
