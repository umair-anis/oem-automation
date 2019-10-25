/**
 * @name backward
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function backward
 * @description Navigates backward using the browser's history.
 * 
 * @param {MessageBuilder} msg
 */
const backward = async (msg = {}) => {
  
  await msg.parent.navigate().back()

  const result = await ResultBuilder().setParent(msg.parent)
    .setStatus('pass')
    .setDetails([`Action Successful: Went Backwards in Browser Hierarchy`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  backward
}
