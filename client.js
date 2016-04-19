'use strict'

var seneca = require('seneca')()

seneca.client()

seneca.act('cmd:collect-tasks,user:havr', function (err, result) {
  console.log(err || result)
})
