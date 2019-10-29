'use strict'

const { buildTestAddSelectedNewCollection } = require('./buildTestAddSelectedNewCollection')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testAddSelectedNewCollection = async (env = {}, credential = '') => {
  const test = await buildTestAddSelectedNewCollection(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddSelectedNewCollection
}
