'use strict'

module.exports = {
  username: process.env.VISMA_USERNAME || 'user',
  password: process.env.VISMA_PASSWORD || 'password',
  host: process.env.VISMA_HOST || 'hostname',
  port: process.env.VISMA_PORT || '8290',
  path: process.env.VISMA_PATH || '/hrm_ws/secure/tasks/username/'
}
