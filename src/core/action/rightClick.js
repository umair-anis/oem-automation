/**
 * @name rightClick
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function rightClick
 * @description Click Right-Click
 */
const rightClick = async (msg = {}) => {
  const parent = msg.parent
  const child = msg.child

  await parent.actions().contextClick(child).perform()

  const result = await ResultBuilder().setStatus('pass')
    .setChild(child)
    .setParent(parent)
    .setDetails([`Action Successful: Right Click ${msg.content.control.name}`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(parent)
    .setChild(child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  rightClick
}
