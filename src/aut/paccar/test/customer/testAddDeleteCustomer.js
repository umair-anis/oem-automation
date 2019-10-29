'use strict'

const { buildTestAddDeleteCustomer } = require('./buildTestAddDeleteCustomer')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { CustomerBuilder } = require('../../data/customer/CustomerBuilder')
const { createAddress } = require('../../../../core/action/createAddress')

const testAddDeleteCustomer = async (env = {}, credential = '', data = {}) => {

  var date = new Date()
  const customer = await CustomerBuilder().setName(`${data.customerName}_${date.getTime()}`)
    .setEmail(await createAddress())
    .setAddress1(data.address1)
    .setAddress2(data.address2)
    .setCity(data.city)
    .setState(data.state)
    .setZipCode(data.zipCode)
    .setCountry(data.country)
    .setPhone(data.phone)
    .setFax(data.fax)
    .setJoinDealerNetwork(data.joinDealerNetwork)
    .build()

  const test = await buildTestAddDeleteCustomer(env, credential, customer)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testAddDeleteCustomer
}
