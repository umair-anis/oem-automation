'use strict'

const { buildTestCustomer_SubscribeAllGroups } = require('./buildTestCustomer_SubscribeAllGroups')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testCustomer_SubscribeAllGroups = async (env = {}, credential = '') => {
  const test = await buildTestCustomer_SubscribeAllGroups(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testCustomer_SubscribeAllGroups
}
