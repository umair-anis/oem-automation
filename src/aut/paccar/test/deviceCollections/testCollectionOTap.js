'use strict'

const { buildTestCollectionOTap } = require('./buildTestCollectionOTap')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testCollectionOTap = async (env = {}, credential = '') => {
  const test = await buildTestCollectionOTap(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testCollectionOTap
}
