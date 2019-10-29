/**
 * @name validateVinsProcessed
 */
'use strict'

const { By } = require('selenium-webdriver')
let { MessageBuilder } = require('../../../../core/layer/MessageBuilder')
let { ResultBuilder } = require('../../../../core/result/ResultBuilder')

const validateVinsProcessed = async (msg = {}) => {
    
  const driver = msg.parent
  const details = []
  var actionResult = null

  try{
    await driver.sleep(2000)
    const vinsNotProcessed = await driver.findElement(By.xpath(`//p[contains(text(), "One or more VINs could not be processed. Please check the formatting of the remaining VINs and try ENTER VIN(s) again.")]`))
    actionResult = await ResultBuilder().setParent(driver)
      .setStatus('fail')
      .setDetails(details)
      .build()

  } catch (e) {
    actionResult = await ResultBuilder().setParent(driver)
        .setStatus('pass')
        .setDetails(details)
        .build()
  }

  const msgResult = await MessageBuilder().setContent(actionResult)
    .setParent(driver)
    .build()

  return Object.freeze(msgResult)
}

module.exports = {
    validateVinsProcessed
}
