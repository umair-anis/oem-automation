/**
 * @name waitToDisappear
 */
'use strict'

const { By, until } = require('selenium-webdriver')
const { ResultBuilder } = require('../result/ResultBuilder')
const { MessageBuilder } = require('../layer/MessageBuilder')

/**
 * @function waitToDisappear
 * @description Wait until an element disappears from the driver
 * 
 * @param {MessageBuilder} msg
 */
const waitToDisappear = async (msg = {}) => {
  const step = msg.content
  const control = step.control
  const driver = msg.parent
  const details = []

  if (control != null) {
    const propertyName = control.property.name
    const propertyValue = control.property.path

    details.push(`Dynamic Wait: Until ${propertyName} Disappears`)

    switch (propertyName.toLowerCase()) {
      case 'classname':
        await driver.wait(until.stalenessOf(driver.findElement(By.className(propertyValue))))
        break

      case 'css':
        await driver.wait(until.stalenessOf(driver.findElement(By.css(propertyValue))))
        break

      case 'id':
        await driver.wait(until.stalenessOf(driver.findElement(By.id(propertyValue))))
        break

      case 'linktext':
        await driver.wait(until.stalenessOf(driver.findElement(By.linkText(propertyValue))))
        break

      case 'name':
        await driver.wait(until.stalenessOf(driver.findElement(By.name(propertyValue))))
        break

      case 'partiallinktext':
        await driver.wait(until.stalenessOf(driver.findElement(By.partialLinkText(propertyValue))))
        break

      case 'tagname':
        await driver.wait(until.stalenessOf(driver.findElement(By.tagName(propertyValue))))
        break

      case 'xpath':
        await driver.wait(until.stalenessOf(driver.findElement(By.xpath(propertyValue))))
        break

      default:
        throw new Error(`Unknown wait until property specified in wait action: ${propertyName}.`)
    }

    details.push(`Wait Successful: ${propertyName} disappeared`)
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
  waitToDisappear
}
