'use strict'

const { buildTestForgotPasswordEmail } = require('./buildTestForgotPasswordEmail')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testForgotPasswordEmail = async (env = {}, credential = '') => {
  const test = await buildTestForgotPasswordEmail(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testForgotPasswordEmail
}
