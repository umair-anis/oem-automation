'use strict'

const { buildTestAddDOGRegion } = require('./buildTestAddDOGRegion')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testAddDOGRegion = async (env = {}, credential = '') => {
  const test = await buildTestAddDOGRegion(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddDOGRegion
}
