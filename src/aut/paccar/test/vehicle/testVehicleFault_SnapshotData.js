'use strict'

const { buildTestVehicleFault_SnapshotData } = require('./buildTestVehicleFault_SnapshotData')

const { invokeTest } = require('../../../../core/test/invokeTest')

const testVehicleFault_SnapshotData = async (env = {}) => {
  const test = await buildTestVehicleFault_SnapshotData(env)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testVehicleFault_SnapshotData
}
