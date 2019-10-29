'use strict'

const { buildTestAddDeletePermission } = require('./buildTestAddDeletePermission')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testAddDeletePermission = async (env = {}, credential = '') => {
  const test = await buildTestAddDeletePermission(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddDeletePermission
}
