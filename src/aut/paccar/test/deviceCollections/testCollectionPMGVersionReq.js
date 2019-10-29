'use strict'

const { buildTestCollectionPMGVersionReq } = require('./buildTestCollectionPMGVersionReq')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testCollectionPMGVersionReq = async (env = {}, credential = '') => {
  const test = await buildTestCollectionPMGVersionReq(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testCollectionPMGVersionReq
}
