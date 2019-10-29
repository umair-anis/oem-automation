'use strict'

const { buildTestExportVehiclesData } = require('./buildTestExportVehiclesData')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testExportVehicleData = async (env = {}, credential = '') => {
  const test = await buildTestExportVehiclesData(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testExportVehicleData
}
