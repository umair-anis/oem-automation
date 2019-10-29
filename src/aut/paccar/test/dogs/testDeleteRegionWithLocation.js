'use strict'

const { buildTestDeleteRegionWithLocation } = require('./buildTestDeleteRegionWithLocation')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testDeleteRegionWithLocation = async (env = {}, credential = '') => {
  const test = await buildTestDeleteRegionWithLocation(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDeleteRegionWithLocation
}
