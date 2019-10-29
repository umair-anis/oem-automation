'use strict'

const { buildTestCollectionVinDiscovery } = require('./buildTestCollectionVinDiscovery')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testCollectionVinDiscovery = async (env = {}, credential = '') => {
  const test = await buildTestCollectionVinDiscovery(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testCollectionVinDiscovery
}
