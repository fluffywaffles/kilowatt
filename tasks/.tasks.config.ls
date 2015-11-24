compile-tasks = <[
  jade
  sass
  stylus
  livescript
]>

serve-tasks = <[
  fonts
  images
]> ++ compileTasks

build-tasks = <[

]> ++ serveTasks

module.exports = {
  compileTasks
  serveTasks
  buildTasks
}
