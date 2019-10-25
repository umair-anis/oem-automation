/**
 * @name hitEnter
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

const ENTER = require('selenium-webdriver').Key.ENTER

/**
 * @function hitEnter
 * @description Click the Enter Button
 * 
 * @param {MessageBuilder} msg
 */
const hitEnter = async (msg = {}) => {
  
  await msg.child.sendKeys(ENTER)

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Action Successful: Clicked Enter`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  hitEnter
}
