/**
 * @name scrollToElement
 */
'use strict'

const { By } = require('selenium-webdriver')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function scrollToElement
 * @description Scroll to an element so it is in view
 *
 * @param {MessageBuilder} msg
 */
const scrollToElement = async (msg = {}) => {
  const parent = msg.parent
  const step = msg.content
  const name = step.control.property.name
  const path = step.control.property.path
  var result = null

  try {
    const element = await parent.findElement(By.xpath(path))
    const script = 'arguments[0].scrollIntoView({behavior: "smooth"})'
    await parent.executeScript(script, element)
    await parent.sleep(500)

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Action Successful: Scroll to element ${name}`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Action FAILED: Cannot scroll to element: ${name} : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setChild(msg.child)
    .setParent(msg.parent)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  scrollToElement
}
