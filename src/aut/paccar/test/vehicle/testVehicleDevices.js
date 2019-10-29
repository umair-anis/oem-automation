'use strict'

const { buildTestVehicleDevice } = require('./buildTestVehicleDevice')

const { invokeTest } = require('../../../../core/test/invokeTest')

const testVehicleDevices = async (env = {}, credential = '') => {
  const test = await buildTestVehicleDevice(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testVehicleDevices
}
