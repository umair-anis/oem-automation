'use strict'

const { buildTestSetRepairVehicle } = require('./buildTestSetRepairVehicle')

const { invokeTest } = require('../../../../core/test/invokeTest')

const testSetIsRepairVehicle = async (env = {}, credential = '') => {
  const test = await buildTestSetRepairVehicle(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testSetIsRepairVehicle
}
