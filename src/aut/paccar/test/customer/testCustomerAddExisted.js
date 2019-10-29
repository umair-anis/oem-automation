'use strict'

const { buildTestCustomerAddExisted } = require('./buildTestCustomerAddExisted')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testCustomerAddExisted = async (env = {}) => {
  const test = await buildTestCustomerAddExisted(env)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testCustomerAddExisted
}
