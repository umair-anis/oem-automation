'use strict'

const { buildTestLoginLogout } = require('./buildTestLoginLogout')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testLoginLogout = async (env = {}, credential = '') => {
  const test = await buildTestLoginLogout(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testLoginLogout
}
