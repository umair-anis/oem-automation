'use strict'

const { buildTestVerifyNotificationJSON } = require('./buildTestVerifyNotificationJSON')
const { invokeTest } = require('../../../../core/test/invokeTest')

const { NotificationBuilder } = require(`../../data/notifications/NotificationBuilder`)

const testVerifyNotificationJSON = async (env = {}, credential = '', data = {}) => {

  const notificationCard = await NotificationBuilder().setTitle(data.title)
  .setRecipient(data.recipient)
  .setDateTime(data.dateTime)
  .setJSON(data.json)
  .build()

  const test = await buildTestVerifyNotificationJSON(env, credential, notificationCard)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testVerifyNotificationJSON
}
