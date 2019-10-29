'use strict'

const { buildTestReactivateVins } = require('./buildTestReactivateVins')
const { invokeTest } = require('../../../../core/test/invokeTest')
const { ActivationBuilder } = require('../../data/remoteDiagnostics/ActivationBuilder')

const testReactivateVins = async (env = {}, credential = '', data = {}) => {

  const activation = await ActivationBuilder().setVins(data.vins)
    .build()

  const test = await buildTestReactivateVins(env, credential, activation)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testReactivateVins
}
