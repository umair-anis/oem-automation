'use strict'

const { buildTestValidSubscriptionFilters } = require('./buildTestValidSubscriptionFilters')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testValidSubscriptionFilters = async (env = {}, credential = '') => {
  const test = await buildTestValidSubscriptionFilters(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testValidSubscriptionFilters
}
