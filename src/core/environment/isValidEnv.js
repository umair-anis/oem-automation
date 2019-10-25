'use strict'

const isValidEnv = async (env = {}) => {
  const name = env.name.toLowerCase()

  return await (name !== 'dev' && name !== 'qa' && name !== 'staging' && name !== 'prod') ? false : true
}

module.exports = {
  isValidEnv
}
