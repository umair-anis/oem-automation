'use strict'

const { buildTestKenMex_Customers } = require('./buildTestKenMex_Customers')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testKenMex_Customers = async (env = {}, credential = '') => {
  const test = await buildTestKenMex_Customers(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testKenMex_Customers
}
