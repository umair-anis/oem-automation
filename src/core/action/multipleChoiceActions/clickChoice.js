/**
 * @name clickChoice
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')
const { getCurrentIterationData } = require('../../iteration/getCurrentIterationData')

/**
 * @function
 * @description Click a Multiple Choice Option that exactly matches the Message's Data
 *
 * @param {MessageBuilder} msg
 * @param {string} msg.data
 */
const clickChoice = async (msg = {}) => {

  const parent = msg.parent
  const choice = await getCurrentIterationData(msg)
  var result = null

  try {
    const choiceElement = await parent.findElement(By.xpath(`//md-radio-button[@aria-label="${choice}"]`))
    await choiceElement.click()

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Clicked Multiple Choice: ${choice}`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to click Multiple Choice: ${choice} : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickChoice
}
