'use strict'

const { buildTestEditDealer_HoursOfService } = require('./buildTestEditDealer_HoursOfService')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testEditDealer_HoursOfService = async (env = {}, credential = '') => {
  const test = await buildTestEditDealer_HoursOfService(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditDealer_HoursOfService
}
