'use strict'

const { buildTestVehicleSoftware } = require('./buildTestVehicleSoftware')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testVehicleSoftware = async (env = {}, credential = '') => {
  const test = await buildTestVehicleSoftware(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testVehicleSoftware
}
