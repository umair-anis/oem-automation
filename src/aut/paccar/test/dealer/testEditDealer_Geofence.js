'use strict'

const { buildTestEditDealer_Geofence } = require('./buildTestEditDealer_Geofence')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testEditDealer_Geofence = async (env = {}, credential = '') => {
  const test = await buildTestEditDealer_Geofence(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditDealer_Geofence
}
