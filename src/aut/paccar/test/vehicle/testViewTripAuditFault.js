'use strict'

const { buildTestViewTripAuditFault } = require('./buildTestViewTripAuditFault')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
const { TripAuditBuilder } = require('../../data/vehicles/TripAuditBuilder')

const testViewTripAuditFault = async (env = {}, credential = '', data = {}) => {

  const vehicle = await VehicleBuilder().setVin(data.vin)
    .build()

  const tripAudit = await TripAuditBuilder().setVin(data.vin)
    .setDate(data.auditDate)
    .setHour(data.auditHour)
    .setMinute(data.auditMinute)
    .setEventType(data.tripEventTypes)
    .setTripID(data.tripID)
    .setFaultLog(data.eventID)
    .build()

  const test = await buildTestViewTripAuditFault(env, credential, vehicle, tripAudit)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testViewTripAuditFault
}
