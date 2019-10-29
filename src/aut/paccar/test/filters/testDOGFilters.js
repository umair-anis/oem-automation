'use strict'

const { buildTestFilters } = require('./buildTestFilters')
const { invokeTest } = require('../../../../core/test/invokeTest')
const { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')

const testDOGFilters = async (env = {}, credential = '') => {
  const test = await buildTestFilters(env, credential, clickDOG)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDOGFilters
}
