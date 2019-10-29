'use strict'

const { buildTestKenMex_Login } = require('./buildTestKenMex_Login')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testKenMex_Login = async (env = {}, credential = '') => {
  const test = await buildTestKenMex_Login(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testKenMex_Login
}
