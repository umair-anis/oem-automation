'use strict'

const { buildTestExportCustomersData } = require('./buildTestExportCustomersData')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testExportCustomerData = async (env = {}, credential = '') => {
  const test = await buildTestExportCustomersData(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testExportCustomerData
}
