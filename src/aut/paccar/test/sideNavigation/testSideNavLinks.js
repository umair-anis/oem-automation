'use strict'

const { buildTestSideNavLinks } = require('./buildTestSideNavLinks')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testSideNavLinks = async (env = {}) => {
  const test = await buildTestSideNavLinks(env)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testSideNavLinks
}
