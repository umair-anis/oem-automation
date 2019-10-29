'use strict'

const { buildTestDeviceForceCall } = require('./buildTestDeviceForceCall')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testDeviceForceCall = async (env = {}, credential = '') => {
  const test = await buildTestDeviceForceCall(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDeviceForceCall
}
