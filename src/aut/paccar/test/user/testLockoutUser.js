'use strict'

const { buildTestLockoutUser } = require('./buildTestLockoutUser')

const { invokeTest } = require('../../../../core/test/invokeTest')

const testLockoutUser = async (env = {}) => {
  const test = await buildTestLockoutUser(env)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testLockoutUser
}
