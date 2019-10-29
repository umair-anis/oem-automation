'use strict'

const { buildTestDeactivateVins } = require('./buildTestDeactivateVins')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { ActivationBuilder } = require('../../data/remoteDiagnostics/ActivationBuilder')

const testDeactivateVins = async (env = {}, credential = '', data = {}) => {

  const activation = await ActivationBuilder().setVins(data.vins)
    .setRemovalCategory(data.removalCategory)
    .build()

  const test = await buildTestDeactivateVins(env, credential, activation)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDeactivateVins
}
