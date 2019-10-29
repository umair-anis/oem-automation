'use strict'

const { buildTestDeviceVinDiscovery } = require('./buildTestDeviceVinDiscovery')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testDeviceVinDiscovery = async (env = {}, credential = '') => {
  const test = await buildTestDeviceVinDiscovery(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDeviceVinDiscovery
}
