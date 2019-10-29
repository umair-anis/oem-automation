'use strict'

const { buildTestDeleteCollection } = require('./buildTestDeleteCollection')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testDeleteCollection = async (env = {}, credential = '') => {
  const test = await buildTestDeleteCollection(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDeleteCollection
}
