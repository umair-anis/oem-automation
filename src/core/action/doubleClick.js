/**
 * @name doubleClick
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function doubleClick
 * @description Click twice
 * 
 * @param {MessageBuilder} msg
 */
const doubleClick = async (msg = {}) => {
  const parent = msg.parent
  const child = msg.child

  await parent.actions().doubleClick(child).perform()

  const result = await ResultBuilder().setStatus('pass')
    .setChild(child)
    .setParent(parent)
    .setDetails([`Action Successful: Double Clicked ${msg.content.control.name}`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(parent)
    .setChild(child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  doubleClick
}
