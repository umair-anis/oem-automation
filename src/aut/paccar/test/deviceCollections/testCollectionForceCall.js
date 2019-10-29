'use strict'

const { buildTestCollectionForceCall } = require('./buildTestCollectionForceCall')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testCollectionForceCall = async (env = {}, credential = '') => {
  const test = await buildTestCollectionForceCall(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testCollectionForceCall
}
