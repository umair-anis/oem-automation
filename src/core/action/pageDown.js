/**
 * @name pageDown
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

const PAGE_DOWN = require('selenium-webdriver').Key.PAGE_DOWN

/**
 * @function pageDown
 * @description Click Page Down button
 * 
 * @param {MessageBuilder} msg
 */
const pageDown = async (msg = {}) => {

  await msg.child.sendKeys(PAGE_DOWN)

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Action Successful: Page Down`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  pageDown
}
