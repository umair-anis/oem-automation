'use strict'

const { buildTestIsAuthorizedServiceCenter } = require('./buildTestIsAuthorizedServiceCenter')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
const { ServiceCenterBuilder } = require('../../data/vehicles/ServiceCenterBuilder')

const testIsAuthorizedServiceCenter = async (env = {}, credential = '', data = {}) => {

  const vehicle = await VehicleBuilder().setVin(data.vin)
    .build()

  const serviceCenter = await ServiceCenterBuilder().setAuthorizedDealer(data.dealerName)
    .setPhoneNumber(data.phoneNumber)
    .build()

  const test = await buildTestIsAuthorizedServiceCenter(env, credential, vehicle, serviceCenter)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testIsAuthorizedServiceCenter
}
