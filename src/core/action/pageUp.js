/**
 * @name pageUp
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

const PAGE_UP = require('selenium-webdriver').Key.PAGE_UP

/**
 * @function pageUp
 * @description Click Page Up button
 * 
 * @param {MessageBuilder} msg
 */
const pageUp = async (msg = {}) => {
  await msg.child.sendKeys(PAGE_UP)

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Action Successful: Page Up`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  pageUp
}
