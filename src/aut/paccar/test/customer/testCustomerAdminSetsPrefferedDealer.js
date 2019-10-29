'use strict'

const { buildTestCustomerAdminSetsPreferredDealer } = require('./buildTestCustomerAdminSetsPreferredDealer')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testCustomerAdminSetsPrefferedDealer = async (env = {}, credential = '') => {
  const test = await buildTestCustomerAdminSetsPreferredDealer(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testCustomerAdminSetsPrefferedDealer
}
