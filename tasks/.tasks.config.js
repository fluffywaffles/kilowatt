var compileTasks = [
    'jade',
    //'sass',
    'stylus'
]

var serveTasks = [
  'fonts',
  'images'
].concat(compileTasks)

var buildTasks = [

].concat(serveTasks)

module.exports = {
  "compileTasks": compileTasks,
  "serveTasks"  : serveTasks,
  "buildTasks"  : buildTasks
}
