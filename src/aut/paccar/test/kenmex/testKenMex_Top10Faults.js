'use strict'

const { buildTestKenMex_Top10Faults } = require('./buildTestKenMex_Top10Faults')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testKenMex_Top10Faults = async (env = {}, credential = '') => {
  const test = await buildTestKenMex_Top10Faults(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testKenMex_Top10Faults
}
