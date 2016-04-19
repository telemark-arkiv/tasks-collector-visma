'use strict'

var getTasks = require('./getTasks')
var toJson = require('./toJson')
var formatTasks = require('./formatTasks')

function getFormatedTasks (options, callback) {
  getTasks(options, function (err, tasks) {
    if (err) {
      return callback(err)
    }
    toJson(tasks, function (err, data) {
      if (err) {
        return callback(err)
      }
      formatTasks(data, function (res) {
        return callback(null, res)
      })
    })
  })
}

module.exports = getFormatedTasks
