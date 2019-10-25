/**
 * @name contains
 */
'use strict'

const { By } = require('selenium-webdriver')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function contains
 * @description Check of an elements getText() contains the Message's Data
 *
 * @param {MessageBuilder} msg
 */
const contains = async (msg = {}) => {
  const parent = msg.parent
  const step = msg.content
  var result = null

  const search = step.data
  var element = null
  const elementName = step.control.property.name
  const elementPath = step.control.property.path

  try {
    element = await parent.findElement(By.xpath(elementPath))
  } catch (e) {
    try {
      element = await parent.findElement(By.css(elementPath))
    } catch (e) {
      throw new Error(`Error: Need non-null element to use contains`)
    }
  }

  const elementText = await element.getText()

  if (elementText.includes(search)) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Action Successful: Text: ${elementName} contains: ${search}`])
      .build()
  } else {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Action FAILED: Text: ${elementName} does not contain: ${search}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  contains
}
