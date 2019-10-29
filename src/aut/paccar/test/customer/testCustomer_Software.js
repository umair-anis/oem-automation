'use strict'

const { buildTestCustomer_Software } = require('./buildTestCustomer_Software')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { CustomerBuilder } = require('../../data/customer/CustomerBuilder')

const testCustomer_Software = async (env = {}, credential = '') => {

  const customer = await CustomerBuilder().setName(`000-STG-CustomerPA`)
    .build()

  const test = await buildTestCustomer_Software(env, credential, customer)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
    testCustomer_Software
}
