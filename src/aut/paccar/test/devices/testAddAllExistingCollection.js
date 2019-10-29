'use strict'

const { buildTestAddAllExistingCollection } = require('./buildTestAddAllExistingCollection')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testAddAllExistingCollection = async (env = {}, credential = '') => {
  const test = await buildTestAddAllExistingCollection(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddAllExistingCollection
}
