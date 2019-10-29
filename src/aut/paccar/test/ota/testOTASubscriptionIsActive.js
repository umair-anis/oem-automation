'use strict'

const { buildTestOTASubscriptionIsActive } = require('./buildTestOTASubscriptionIsActive')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')

const testOTASubscriptionIsActive = async (env = {}, credential = '', data = {}) => {
  
  const vehicle = await VehicleBuilder().setVin(data.vin)
    .build()

  const test = await buildTestOTASubscriptionIsActive(env, credential, vehicle)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testOTASubscriptionIsActive
}
