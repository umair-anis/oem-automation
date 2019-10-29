'use strict'

const { buildTestDevicePMGVersionReq } = require('./buildTestDevicePMGVersionReq')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testDevicePMGVersionReq = async (env = {}, credential = '') => {
  const test = await buildTestDevicePMGVersionReq(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDevicePMGVersionReq
}
