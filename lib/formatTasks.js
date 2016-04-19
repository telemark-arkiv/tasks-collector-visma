'use strict'

function formatTasks (data, callback) {
  var list = []
  var i = 0
  data.forEach(function (task) {
    if (task['$'] !== 'undefined') {
      var item = {}
      item.title = task['$'].text
      item.url = task['$'].link
      item.number = task['$'].number
      list.push(item)
      i++
    }
    if (data.length === i) {
      return callback(list)
    }
  })
}

module.exports = formatTasks
