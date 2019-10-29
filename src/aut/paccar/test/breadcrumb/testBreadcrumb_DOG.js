'use strict'

const { buildTestBreadcrumb_DOG } = require('./buildTestBreadcrumb_DOG')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testBreadcrumb_DOG = async (env = {}, credential = '') => {
  const test = await buildTestBreadcrumb_DOG(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testBreadcrumb_DOG
}
