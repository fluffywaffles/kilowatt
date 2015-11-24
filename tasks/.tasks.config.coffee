compileTasks = [
  'jade'
  'sass'
  'stylus'
  'coffee'
]

serveTasks = [
  'fonts'
  'images'
].concat compileTasks

buildTasks = [

].concat serveTasks

module.exports = {
  compileTasks
  serveTasks
  buildTasks
}
