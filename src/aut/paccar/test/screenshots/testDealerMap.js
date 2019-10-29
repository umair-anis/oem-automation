'use strict'

const { buildTestDealerMap } = require('./buildTestDealerMap')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testDealerMap = async (env = {}, credential = '') => {
  const test = await buildTestDealerMap(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDealerMap
}
