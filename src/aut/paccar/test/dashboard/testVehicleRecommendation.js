'use strict'

const { buildTestVehicleRecommendation } = require('./buildTestVehicleRecommendation')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testVehicleRecommendation = async (env = {}, credential = '') => {
  
  const test = await buildTestVehicleRecommendation(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
    testVehicleRecommendation
}
