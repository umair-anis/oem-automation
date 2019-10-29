'use strict'

const { buildTestInvalidLogin } = require('./buildTestInvalidLogin')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testInvalidLogin = async (env = {}, credential = '') => {
  const test = await buildTestInvalidLogin(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testInvalidLogin
}
