'use strict'

const { buildTestEditDealer_Phone } = require('./buildTestEditDealer_Phone')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testEditDealer_Phone = async (env = {}, credential = '') => {
  const test = await buildTestEditDealer_Phone(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditDealer_Phone
}
