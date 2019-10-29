'use strict'

const { buildTestEditPermission } = require('./buildTestEditPermission')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testEditPermission = async (env = {}, credential = '') => {
  const test = await buildTestEditPermission(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditPermission
}
