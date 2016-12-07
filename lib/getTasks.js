'use strict'

var http = require('http')

function createLink (options) {
  var url = 'http://' + options.username + ':' + options.password + '@' + options.host + ':' + options.port + options.path + options.user
  return url
}

module.exports = (options, callback) => {
  const url = createLink(options)
  const user = options.user
  var body = ''

  console.log(`task-collector-visma: collecting tasks for ${user}`)

  http.get(url, function (res) {
    res.on('data', function (chunk) {
      body += chunk.toString()
    })

    res.on('end', function () {
      console.log(`task-collector-visma: finished collecting tasks for ${user}`)
      return callback(null, body)
    })
  }).on('error', function (error) {
    console.log(`task-collector-visma: error collecting tasks for ${user}`)
    return callback(error, null)
  })
}
