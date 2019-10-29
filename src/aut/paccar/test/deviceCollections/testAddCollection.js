'use strict'

const { buildTestAddCollection } = require('./buildTestAddCollection')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testAddCollection = async (env = {}, credential = '') => {
  const test = await buildTestAddCollection(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddCollection
}
