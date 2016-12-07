'use strict'

const envs = process.env
const pkg = require('../package.json')
const config = require('../config')
const getFormatedTasks = require('./getFormatedTasks')

module.exports = function (options) {
  var seneca = this

  seneca.add('cmd:collect-tasks, type:user', getTasksFromVisma)

  return {
    name: envs.TASKS_COLLECTOR_VISMA_TAG || 'tasks-collector-visma'
  }
}

function getTasksFromVisma (args, callback) {
  const seneca = this
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
      system: pkg.name,
      version: pkg.version,
      user: args.user,
      data: data
    }
    if (err) {
      callback(err)
    } else {
      seneca.act({info: 'tasks', type: 'user', data: result})
      callback(null, {ok: true})
    }
  })
}
