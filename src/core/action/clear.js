/**
 * @name clear
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function clear
 * @description Clears the contents of an input field
 * 
 * @param {MessageBuilder} msg
 */
const clear = async (msg = {}) => {
  const parent = msg.parent
  const child = msg.child

  await child.clear()

  const result = await ResultBuilder().setStatus('pass')
    .setChild(child)
    .setParent(parent)
    .setDetails([`Action Successful: Cleared Field ${msg.content.control.name}`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(parent)
    .setChild(child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clear
}
