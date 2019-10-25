/**
 * @name escape
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

const ESCAPE = require('selenium-webdriver').Key.ESCAPE

/**
 * @function escape
 * @description Click Escape button.
 *              May be used to close a pop-up window or leave a page
 * 
 * @param {MessageBuilder} msg
 */
const escape = async (msg = {}) => {
  
  await msg.child.sendKeys(ESCAPE)

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Action Successful: Clicked Escape`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  escape
}
