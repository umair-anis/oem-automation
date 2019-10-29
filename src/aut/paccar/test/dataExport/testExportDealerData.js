'use strict'

const { buildTestExportDealersData } = require('./buildTestExportDealersData')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testExportDealerData = async (env = {}, credential = '') => {
  const test = await buildTestExportDealersData(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testExportDealerData
}
