'use strict'

const { buildTestAddDOG } = require('./buildTestAddDOG')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testAddDOG = async (env = {}, credential = '') => {
  const test = await buildTestAddDOG(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddDOG
}
