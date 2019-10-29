'use strict'

const { buildTestKenMex_Dashboard } = require('./buildTestKenMex_Dashboard')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testKenMex_Dashboard = async (env = {}, credential = '') => {
  const test = await buildTestKenMex_Dashboard(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testKenMex_Dashboard
}
