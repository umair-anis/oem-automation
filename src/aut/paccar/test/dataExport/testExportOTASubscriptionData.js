'use strict'

const { buildTestExportOTASubscriptionsData } = require('./buildTestExportOTASubscriptionsData')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testExportOTASubscriptionData = async (env = {}, credential = '') => {
  const test = await buildTestExportOTASubscriptionsData(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testExportOTASubscriptionData
}
