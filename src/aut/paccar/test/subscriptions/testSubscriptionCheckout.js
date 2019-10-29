'use strict'

const { buildTestSubscriptionCheckout } = require('./buildTestSubscriptionCheckout')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { CheckoutBuilder } = require('../../data/subscriptions/CheckoutBuilder')

const testSubscriptionCheckout = async (env = {}, credential = '', data = {}) => {

  const checkout = await CheckoutBuilder().setSubscription(data.subscription)
    .setBulkSubscriptionDuration(data.duration)
    .setFirstName(data.firstName)
    .setLastName(data.lastName)
    .setEmail(data.email)
    .setPhone(data.phone)
    .setExtension(data.extension)
    .build()

  const test = await buildTestSubscriptionCheckout(env, credential, checkout)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testSubscriptionCheckout
}
