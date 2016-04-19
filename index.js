'use strict'

var config = require('./config')
var getFormatedTasks = require('./lib/getFormatedTasks')

var options = {
  username: config.username,
  password: config.password,
  host: config.host,
  port: config.port,
  path: config.path,
  user: process.argv[2] || config.user
}

getFormatedTasks(options, function (err, data) {
  console.log(err || data)
})
