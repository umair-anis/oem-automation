'use strict'

const { buildTestExportDeviceData } = require('./buildTestExportDeviceData')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testExportDeviceData = async (env = {}, credential = '') => {
  const test = await buildTestExportDeviceData(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
   testExportDeviceData
}
