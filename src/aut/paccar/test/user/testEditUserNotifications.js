'use strict'

const { buildTestEditUserNotifications } = require('./buildTestEditUserNotifications')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { UserBuilder } = require('../../data/user/UserBuilder')
const { UserNotificationBuilder } = require('../../data/user/UserNotificationBuilder')

const testEditUserNotifications = async (env = {}, credential = '', data = {}) => {

  const user = await UserBuilder().setEmail(data.email)
    .build()

  const userNotification = await UserNotificationBuilder().setEmailNotifications(data.notificationOption)
    .setSubscribedCustomers(data.subscribedCustomers)
    .setSubscribedVehicleGroups(data.subscribedVehicleGroups)
    .build()

  const test = await buildTestEditUserNotifications(env, credential, user, userNotification)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditUserNotifications
}
