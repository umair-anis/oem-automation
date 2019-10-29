'use strict'

const { buildTestClickVehiclePin } = require('./buildTestClickVehiclePin')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testClickVehiclePin = async (env = {}, credential = '') => {
  const test = await buildTestClickVehiclePin(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testClickVehiclePin
}
