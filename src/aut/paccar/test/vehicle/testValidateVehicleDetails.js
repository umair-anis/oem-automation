'use strict'

const { buildTestValidateVehicleDetails } = require('./buildTestValidateVehicleDetails')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
const { VehicleDetailsBuilder } = require('../../data/vehicles/VehicleDetailsBuilder')

const testValidateVehicleDetails = async (env = {}, credential = '', data = {}) => {

  const vehicle = await VehicleBuilder().setVin(data.vin)
  .build()

  const vehicleDetails = await VehicleDetailsBuilder().setRecommendation(data.healthRecommendation)
    .setAddress(data.address)
    .setCity(data.address)
    .setTime(data.time)
    .setCustomer(data.customer)
    .setYearMakeModel(data.yearMakeModel)
    .setUnitNumber(data.unitNumber)
    .setDescription(data.description)
    .setVin(data.vin)
    .setDSN(data.dsn)
    .setMileage(data.mileage)
    .setEngineModel(data.engineModel)
    .setEngineSerialNumber(data.engineSerialNumber)
    .setSubscriptionStatus(data.subscriptionStatus)
    .setSubscriptionEnd(``)
    .setPMGFirmware(data.subscriptionEnd)
    .setAfterTreatmentID(data.afterTreatmentID)
    .setFuelEconomy(data.fuelEconomy)
    .setPercentIdle(data.percentIdle)
    .setEngineHours(data.engineHours)
    .build()

  const test = await buildTestValidateVehicleDetails(env, credential, vehicle, vehicleDetails)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testValidateVehicleDetails
}
