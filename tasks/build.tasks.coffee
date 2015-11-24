config = require './.tasks.config'

module.exports = (gulp, $) ->

  gulp.task 'build', config.buildTasks, () ->
    gulp.src '.tmp', () ->

