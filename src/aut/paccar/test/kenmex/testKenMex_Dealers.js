'use strict'

const { buildTestKenMex_Dealers } = require('./buildTestKenMex_Dealers')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testKenMex_Dealers = async (env = {}, credential = '') => {
  const test = await buildTestKenMex_Dealers(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testKenMex_Dealers
}
