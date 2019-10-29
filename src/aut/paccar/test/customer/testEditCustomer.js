'use strict'

const { buildTestEditCustomer } = require('./buildTestEditCustomer')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { CustomerBuilder } = require('../../data/customer/CustomerBuilder')

const testEditCustomer = async (env = {}, credential = '', data = {}) => {

  const customer = await CustomerBuilder().setName(data.customerName)
    .setEmail(data.customerEmail)
    .setAddress1(data.address1)
    .setAddress2(data.address2)
    .setCity(data.city)
    .setState(data.state)
    .setZipCode(data.zipCode)
    .setCountry(data.country)
    .setPhone(data.phone)
    .setFax(data.phone)
    .setJoinDealerNetwork(data.joinDealerNetwork)
    .build()

  const test = await buildTestEditCustomer(env, credential, customer)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditCustomer
}
