'use strict'

const { buildTestRunDiagnostics } = require('./buildTestRunDiagnostics')

const { invokeTest } = require('../../../../core/test/invokeTest')

const testRunDiagnostics = async (env = {}, credential = '') => {
  const test = await buildTestRunDiagnostics(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testRunDiagnostics
}
