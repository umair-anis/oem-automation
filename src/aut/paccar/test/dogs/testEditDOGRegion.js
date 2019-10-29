'use strict'

const { buildTestEditDOGRegion } = require('./buildTestEditDOGRegion')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testEditDOGRegion = async (env = {}, credential = '') => {
  const test = await buildTestEditDOGRegion(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditDOGRegion
}
