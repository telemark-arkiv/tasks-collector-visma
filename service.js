'use strict'

var seneca = require('seneca')()
var pkg = require('./package.json')
var config = require('./config')
var getFormatedTasks = require('./lib/getFormatedTasks')

seneca.add({ cmd: 'collect-tasks' }, function (args, callback) {
  var options = {
    username: config.username,
    password: config.password,
    host: config.host,
    port: config.port,
    path: config.path,
    user: args.user
  }

  getFormatedTasks(options, function (err, data) {
    var result = {
      id: pkg.name,
      version: pkg.version,
      timestamp: new Date().getTime(),
      user: args.user,
      results: data
    }
    if (err) {
      callback(err)
    }
    callback(null, result)
  })
})

seneca.listen()
