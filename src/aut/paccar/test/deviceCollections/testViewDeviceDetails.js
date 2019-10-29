'use strict'

const { buildTestViewDeviceDetails } = require('./buildTestViewDeviceDetails')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testViewDeviceDetails = async (env = {}, credential = '') => {
  const test = await buildTestViewDeviceDetails(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testViewDeviceDetails
}
