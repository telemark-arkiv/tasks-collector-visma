[![Build Status](https://travis-ci.org/telemark/tasks-collector-visma.svg?branch=master)](https://travis-ci.org/telemark/tasks-collector-visma)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tasks-collector-visma

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tasks-collector-visma.svg)](https://greenkeeper.io/)
Service for collecting tasks from Visma

## Inbound messages
This microservice listens for the following messages


- ```{cmd: 'collect-tasks', type: 'user'}```

## Outbound messages
This microservice emits the following messages

- ```{info: 'tasks', type:'user'}```

## Docker
Build the image

```
$ docker build -t tasks-collector-visma .
```

Start

```
$ docker run -d --net host --name tasks-collector-visma tasks-collector-visma
```

From hub.docker.com

```
$ docker run -d --net host --name tasks-collector-visma telemark/tasks-collector-visma
```

Call the service

```
$ curl -d '{"cmd":"collect-tasks", "type": "user", "user":"enge"}' -v http://192.168.99.100:8000/act
```
