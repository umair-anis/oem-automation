'use strict'

const { buildTestVehicleDiagDisabled } = require('./buildTestVehicleDiagDisabled')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testVehicleDiagDisabled = async (env = {}, credential = '') => {
  const test = await buildTestVehicleDiagDisabled(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testVehicleDiagDisabled
}
