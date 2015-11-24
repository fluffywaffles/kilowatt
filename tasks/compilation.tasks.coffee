module.exports = (gulp, $) ->

  reload = $.browserSync.reload

  gulp.task 'jade', () ->
    gulp.src [ 'src/jade/**/*.jade', '!src/jade/{includes,includes/**}' ]
      .pipe $.plumber()
      .pipe $.sourcemaps.init()
      .pipe $.jade { pretty: true }
      .pipe $.sourcemaps.write()
      .pipe gulp.dest '.tmp'
      .pipe reload { stream: true }

  gulp.task 'stylus', () ->
    gulp.src 'src/styles/main.styl'
      .pipe $.plumber()
      .pipe $.sourcemaps.init()
      .pipe $.stylus()
      .pipe $.sourcemaps.write()
      .pipe gulp.dest '.tmp/styles'
      .pipe reload { stream: true }

  gulp.task 'sass', () ->
    gulp.src 'src/styles/main.{scss,sass}'
      .pipe $.plumber()
      .pipe $.sourcemaps.init()
      .pipe $.sass.sync { pretty: true }
      .pipe $.sourcemaps.write()
      .pipe gulp.dest '.tmp/styles'
      .pipe reload { stream: true }

  gulp.task 'coffee', () ->
    gulp.src 'src/scripts/main.coffee'
      .pipe $.plumber()
      .pipe $.sourcemaps.init()
      .pipe $.coffee { pretty: true }
      .pipe $.sourcemaps.write()
      .pipe gulp.dest '.tmp/scripts'
      .pipe reload { stream: true }
