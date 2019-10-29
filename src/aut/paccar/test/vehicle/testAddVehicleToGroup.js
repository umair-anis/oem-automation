'use strict'

const { buildTestAddVehicleToGroup } = require('./buildTestAddVehicleToGroup')

const { invokeTest } = require('../../../../core/test/invokeTest')

const testAddVehicleToGroup = async (env = {}, credential = '') => {
  const test = await buildTestAddVehicleToGroup(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddVehicleToGroup
}
