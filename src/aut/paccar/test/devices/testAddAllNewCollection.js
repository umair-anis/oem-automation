'use strict'

const { buildTestAddAllNewCollection } = require('./buildTestAddAllNewCollection')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testAddAllNewCollection = async (env = {}, credential = '') => {
  const test = await buildTestAddAllNewCollection(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddAllNewCollection
}
