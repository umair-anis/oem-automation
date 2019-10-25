/**
 * @name forward
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function forward
 * @description Navigates forward using the browser's history.
 * 
 * @param {MessageBuilder} msg
 */
const forward = async (msg = {}) => {
  
  await msg.parent.navigate().forward()

  const result = await ResultBuilder().setParent(msg.parent)
    .setStatus('pass')
    .setDetails([`Action Successful: Went Forwards in Browser Hierarchy`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  forward
}
