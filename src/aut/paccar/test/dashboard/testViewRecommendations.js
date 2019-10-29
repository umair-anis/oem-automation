'use strict'

const { buildTestViewRecommendations } = require('./buildTestViewRecommendations')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testViewRecommendations = async (env = {}, credential = '') => {
  
  const test = await buildTestViewRecommendations(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testViewRecommendations
}
