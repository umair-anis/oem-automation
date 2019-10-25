/**
 * @name translate
 * @author Avery Swank
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function translate
 * @description Check if the Message's Data is the same as the Element's text.
 *              Although this a translation, we simply just check if the texts match
 * 
 * @param {MessageBuilder} msg 
 */
const translate = async (msg = {}) => {

  const element = msg.child
  const step = msg.content
  const search = step.data
  var result = null

  var elementText = await element.getText()

  if (elementText.includes(search)) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Action Successful: Translate Text contains ${search}`])
      .build()
  } else {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Action FAILED: Translate Text does not contains ${search}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  translate
}
