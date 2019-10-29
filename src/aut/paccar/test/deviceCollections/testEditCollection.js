'use strict'

const { buildTestEditCollection } = require('./buildTestEditCollection')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testEditCollection = async (env = {}, credential = '') => {
  const test = await buildTestEditCollection(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditCollection
}
