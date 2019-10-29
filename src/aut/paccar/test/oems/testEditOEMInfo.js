'use strict'

const { buildTestEditOEMInfo } = require('./buildTestEditOEMInfo')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { OEMBuilder } = require('../../data/oems/OEMBuilder')

const testEditOEMInfo = async (env = {}, credential = '', data = {}) => {

  const oem = await OEMBuilder().setName(data.oemName)
    .setSubscription(data.subscription)
    .setWarranty(data.warranty)
    .build()

  const test = await buildTestEditOEMInfo(env, credential, oem)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditOEMInfo
}
