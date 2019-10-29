'use strict'

const { buildTestTransferOwnership } = require('./buildTestTransferOwnership')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')

const testTransferOwnership = async (env = {}, credential = '', data = {}) => {

  const vehicle = await VehicleBuilder().setVin(data.vin)
    .build()

  const customer1 = [data.customer1]
  const customer2 = [data.customer2]

  const test = await buildTestTransferOwnership(env, credential, vehicle, customer1, customer2)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testTransferOwnership
}
