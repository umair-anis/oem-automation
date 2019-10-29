'use strict'

const { buildTestIsOwnershipHistoryRecord } = require('./buildTestIsOwnershipHistoryRecord')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
const { OwnershipRecordBuilder } = require('../../data/vehicles/OwnershipRecordBuilder')

const testIsOwnershipHistoryRecord = async (env = {}, credential = '', data = {}) => {

  const vehicle = await VehicleBuilder().setVin(data.vin)
  .build()

  const ownershipRecord = await OwnershipRecordBuilder().setCustomer(data.customer)
    .setPurchaseDate(data.purchaseDate)
    .setChangedBy(data.changedBy)
    .build()

  const test = await buildTestIsOwnershipHistoryRecord(env, credential, vehicle, ownershipRecord)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testIsOwnershipHistoryRecord
}
