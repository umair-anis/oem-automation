/**
 * @name compareFormErrors
 */
'use strict'

const { By } = require('selenium-webdriver')
const { ResultBuilder } = require('../result/ResultBuilder')
const { MessageBuilder } = require('../layer/MessageBuilder')

/**
 * @function isNotDisplayed
 * @description Get a list of form error prompts. Validate the input data matches the form errors
 * 
 * @param {MessageBuilder} msg
 */
const compareFormErrors = async (msg = {}) => {
  const step = msg.content
  const driver = msg.parent
  const errorList = step.data[0]
  const details = []
  var actionResult = null

  var formErrorList = []
  const errors = await driver.findElements(By.xpath(`//ng-message`))

  for(const error of errors){
    formErrorList.push(await error.getText())
  }

  const foundError = false
  for(const error of errorList){
    if(formErrorList.includes(error))
      foundError = true
  }

  if(foundError && formErrorList.length > 0){
    actionResult = await ResultBuilder().setParent(driver)
      .setStatus('fail')
      .setDetails(details)
      .build()
  } else {
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
  compareFormErrors
}
