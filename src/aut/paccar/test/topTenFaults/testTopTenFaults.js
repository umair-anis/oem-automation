'use strict'

const { buildTestTopTenFaults } = require('./buildTestTopTenFaults')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { Top10FaultBuilder } = require('../../data/faults/Top10FaultBuilder')

const testTopTenFaults = async (env = {}, credential = '', data = {}) => {

  const topTenFault = await Top10FaultBuilder().setDTC(data.dtc)
    .build()

  const test = await buildTestTopTenFaults(env, credential, topTenFault)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testTopTenFaults
}
