'use strict'

const { buildTestKenMex_GoogleAnalytics } = require('./buildTestKenMex_GoogleAnalytics')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testKenMex_GoogleAnalytics = async (env = {}, credential = '') => {
  const test = await buildTestKenMex_GoogleAnalytics(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testKenMex_GoogleAnalytics
}
