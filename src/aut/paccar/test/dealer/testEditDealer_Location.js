'use strict'

const { buildTestEditDealer_Location } = require('./buildTestEditDealer_Location')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testEditDealer_Location = async (env = {}, credential = '') => {
  const test = await buildTestEditDealer_Location(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditDealer_Location
}
