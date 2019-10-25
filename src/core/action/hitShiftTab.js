/**
 * @name hitShiftTab
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')
const { SHIFT, TAB, chord } = require('selenium-webdriver').Key

/**
 * @function hitShiftTab
 * @description Click Shift and Tab together.
 * 
 * 
 * @param {MessageBuilder} msg
 */
const hitShiftTab = async (msg = {}) => {
  const sequence = chord(SHIFT, TAB)
  msg.child.sendKeys(sequence)

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Action Successful: Pressed SHIFT+TAB`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  hitShiftTab
}
