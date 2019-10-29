'use strict'

const { buildTestKenMex_RemoteDiagnostics } = require('./buildTestKenMex_RemoteDiagnostics')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testKenMex_RemoteDiagnostics = async (env = {}, credential = '') => {
  const test = await buildTestKenMex_RemoteDiagnostics(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testKenMex_RemoteDiagnostics
}
