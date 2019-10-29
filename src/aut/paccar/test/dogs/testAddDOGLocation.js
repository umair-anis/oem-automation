'use strict'

const { buildTestAddDOGLocation } = require('./buildTestAddDOGLocation')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testAddDOGLocation = async (env = {}, credential = '') => {
  const test = await buildTestAddDOGLocation(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddDOGLocation
}
