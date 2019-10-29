'use strict'

const { buildTestAddVehicleToCreatedGroup } = require('./buildTestAddVehicleToCreatedGroup')

const { invokeTest } = require('../../../../core/test/invokeTest')

const testAddVehicleToCreatedGroup = async (env = {}, credential = '') => {
  const test = await buildTestAddVehicleToCreatedGroup(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddVehicleToCreatedGroup
}
