/**
 * @name open
 */
'use strict'

const { Builder } = require('selenium-webdriver')
const { promise } = require('selenium-webdriver')
const { getCurrentIterationData } = require('../iteration/getCurrentIterationData')
const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function open
 * @description Open the Driver and the Browser
 * 
 * @param {MessageBuilder} msg
 */
const open = async (msg = {}) => {
  const step = msg.content
  let driver = {}
  const details = []

  const browser = step.browser
  const browserName = step.browser.name
  const capabilities = browser.capabilities
  const environment = step.environment
  const isRemote = environment.isRemote
  const isSauceLabs = environment.isSauceLabs
  const remoteUrl = environment.remoteUrl
  const version = browser.version
  const data = await getCurrentIterationData(msg)

  promise.USE_PROMISE_MANAGER = false

  // Will get options from the browser and add additional logic for applying those options in here.

  if (capabilities != null) {
    if (isRemote || isSauceLabs) {
      driver = await new Builder().forBrowser(browserName)
        .withCapabilities(capabilities)
        .setAlertBehavior('accept')
        .usingServer(remoteUrl)
        .build()
    } else {
      driver = await new Builder().forBrowser(browserName)
        .withCapabilities(capabilities)
        .setAlertBehavior('accept')
        .build()
    }
  } else {
    if (isRemote || isSauceLabs) {
      driver = await new Builder().forBrowser(browserName)
        .usingServer(remoteUrl)
        .setAlertBehavior('accept')
        .build()
    } else {
      driver = await new Builder().forBrowser(browserName)
        .build()
    }
  }

  await driver.manage().window().maximize()

  const isUrlEmpty = await isEmptyOrWhitespace(data)

  if (!isUrlEmpty) {
    await driver.get(data)
    details.push(`Action Successful: Opened ${browserName} to URL: ${data}.`)
  } else {
    details.push(`Action Successful: Opened ${browserName}.`)
  }

  const actionResult = await ResultBuilder().setParent(driver)
    .setData(data)
    .setDetails(details)
    .setStatus('pass')
    .build()

  const msgResult = await MessageBuilder().setContent(actionResult)
    .setParent(driver)
    .build()

  return Object.freeze(msgResult)
}

module.exports = {
  open
}
