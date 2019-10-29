'use strict'

const { buildTestVehicleFault_Details } = require('./buildTestVehicleFault_Details')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')

const testVehicleFault_Details = async (env = {}, credential = '', data = {}) => {

  const vehicle = await VehicleBuilder().setVin(data.vin)
  .build()

  const test = await buildTestVehicleFault_Details(env, credential, vehicle)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testVehicleFault_Details
}
