/**
 * @name click
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function click
 * @description Click a buttoon, link, dropdown header, dropdown option, etc.
 *
 * @param {MessageBuilder} msg
 */
const click = async (msg = {}) => {
  
  await msg.child.click()

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Action Successful: Clicked ${msg.content.control.name}`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  click
}
