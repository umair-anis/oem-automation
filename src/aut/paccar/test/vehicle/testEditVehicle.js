'use strict'

const { buildTestEditVehicle } = require('./buildTestEditVehicle')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')

const testEditVehicle = async (env = {}, credential = '', data = {}) => {

  const vehicle = await VehicleBuilder().setVin(data.vin)
    .setUnitNumber(data.unitNumber)
    .setDescription(data.description)
    .setSubscriptionStart(data.subscriptionStart)
    .setSubscriptionEnd(data.subscriptionEnd)
    .setOTASubscriptionStatus(data.otaSubscriptoinStatus)
    .build()

  const test = await buildTestEditVehicle(env, credential, vehicle)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
    testEditVehicle
}
