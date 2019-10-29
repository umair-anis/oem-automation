'use strict'

const { buildTestDiagnosticAssistant } = require('./buildTestDiagnosticAssistant')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testDiagnosticAssistant = async (env = {}, credential = '') => {
  const test = await buildTestDiagnosticAssistant(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDiagnosticAssistant
}
