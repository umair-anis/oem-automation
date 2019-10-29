'use strict'

const { buildTestCustomer_SubscribedUsers } = require('./buildTestCustomer_SubscribedUsers')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { CustomerBuilder } = require('../../data/customer/CustomerBuilder')

const testCustomer_SubscribedUsers = async (env = {}, credential = '', data = {}) => {

  const customer = await CustomerBuilder().setName(data.customerName)
    .build()

  const userName = [`${data.userName}`]

  const test = await buildTestCustomer_SubscribedUsers(env, credential, customer, userName)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testCustomer_SubscribedUsers
}
