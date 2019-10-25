/**
 * @name wait
 */
'use strict'

const { By, until } = require('selenium-webdriver')
const { ResultBuilder } = require('../result/ResultBuilder')
const { MessageBuilder } = require('../layer/MessageBuilder')

/**
 * @function wait
 * @description Wait for a static set period or time or until an element is located
 * 
 * @param {MessageBuilder} msg
 */
const wait = async (msg = {}) => {
  const step = msg.content
  const control = step.control
  const driver = msg.parent
  const details = []

  if (control != null) {
    const propertyName = control.property.name
    const propertyValue = control.property.path

    details.push(`Dynamic Wait: Until ${propertyName} is located`)

    switch (propertyName.toLowerCase()) {
      case 'classname':
        await driver.wait(until.elementLocated(By.className(propertyValue)))
        break

      case 'css':
        await driver.wait(until.elementLocated(By.css(propertyValue)))
        break

      case 'id':
        await driver.wait(until.elementLocated(By.id(propertyValue)))
        break

      case 'linktext':
        await driver.wait(until.elementLocated(By.linkText(propertyValue)))
        break

      case 'name':
        await driver.wait(until.elementLocated(By.name(propertyValue)))
        break

      case 'partiallinktext':
        await driver.wait(until.elementLocated(By.partialLinkText(propertyValue)))
        break

      case 'tagname':
        await driver.wait(until.elementLocated(By.tagName(propertyValue)))
        break

      case 'xpath':
        await driver.wait(until.elementLocated(By.xpath(propertyValue)))
        break

      default:
        throw new Error(`Unknown wait until property specified in wait action: ${propertyName}.`)
    }

    details.push(`Wait Successful: ${propertyName} found`)
  } else {
    await driver.sleep(10000)
    details.push(`Static Wait: 10 seconds`)
  }

  const actionResult = await ResultBuilder().setParent(driver)
    .setStatus('pass')
    .setDetails(details)
    .build()

  const msgResult = await MessageBuilder().setContent(actionResult)
    .setParent(driver)
    .build()

  return Object.freeze(msgResult)
}

module.exports = {
  wait
}
