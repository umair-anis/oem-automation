'use strict'

const { buildTestKenMex_Vehicles } = require('./buildTestKenMex_Vehicles')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testKenMex_Vehicles = async (env = {}, credential = '') => {
  const test = await buildTestKenMex_Vehicles(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testKenMex_Vehicles
}
