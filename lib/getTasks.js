'use strict'

var http = require('http')

function createLink (options) {
  var url = 'http://' + options.username + ':' + options.password + '@' + options.host + ':' + options.port + options.path + options.user
  return url
}

function getTasks (options, callback) {
  var url = createLink(options)
  var body = ''

  http.get(url, function (res) {
    res.on('data', function (chunk) {
      body += chunk.toString()
    })

    res.on('end', function () {
      return callback(null, body)
    })
  }).on('error', function (error) {
    return callback(error, null)
  })
}

module.exports = getTasks

