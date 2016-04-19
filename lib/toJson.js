'use strict'

var parseString = require('xml2js').parseString

function toJson (data, callback) {
  parseString(data, function (err, tasks) {
    if (err) {
      return callback(err)
    }
    if (tasks.tasks.length < 1 || typeof tasks.tasks.task === 'undefined') {
      return callback('No tasks found')
    }
    return callback(null, tasks.tasks.task)
  })
}

module.exports = toJson
