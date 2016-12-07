'use strict'

module.exports = (data, callback) => {
  var list = []
  var i = 0
  data.forEach((task) => {
    if (task['$'] !== 'undefined') {
      var item = {}
      item.systemid = 'visma'
      item.title = task['$'].text
      item.url = task['$'].link
      item.number = task['$'].number
      item.timestamp = new Date().getTime()
      list.push(item)
      i++
    }
    if (data.length === i) {
      return callback(list)
    }
  })
}
