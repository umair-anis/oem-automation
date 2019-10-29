'use strict'

const { buildTestCustomer_AddDeleteVehicleGroup } = require('./buildTestCustomer_AddDeleteVehicleGroup')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testCustomer_AddDeleteVehicleGroup = async (env = {}, credential = '') => {
  const test = await buildTestCustomer_AddDeleteVehicleGroup(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testCustomer_AddDeleteVehicleGroup
}
