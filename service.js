'use strict'

var Seneca = require('seneca')
var Mesh = require('seneca-mesh')
var Visma = require('./lib/visma.js')
var envs = process.env

var options = {
  seneca: {
    tag: envs.TASKS_COLLECTOR_VISMA_TAG || 'tasks-collector-visma'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'cmd:collect-tasks, type:user', model: 'observe'}
    ]
  },
  visma: {
    url: envs.TASKS_COLLECTOR_VISMA_URL || 'http://visma.no'
  },
  isolated: {
    host: envs.TASKS_COLLECTOR_VISMA_HOST || 'localhost',
    port: envs.TASKS_COLLECTOR_VISMA_PORT || 8000
  }
}

var Service = Seneca(options.seneca)

if (envs.TASKS_COLLECTOR_VISMA_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Visma, options.visma)
