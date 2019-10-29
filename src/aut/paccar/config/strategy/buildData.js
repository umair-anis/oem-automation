'use strict'

const buildData = async (env = '', devFunc = {}, qaFunc = {}, stageFunc = {}, prodFunc = {}) => {
  let data = {}

  switch (env.toLowerCase()) {
    case 'dev':
      data = await devFunc()
      break

    case 'qa':
      data = await qaFunc()
      break

    case 'staging':
      data = await stageFunc()
      break

    case 'prod':
      data = await prodFunc()
      break

    default:
      throw new Error(`Unknown environment: ${env} specified in buildData().`)
  }

  return Object.freeze(data)
}

module.exports = {
  buildData
}
