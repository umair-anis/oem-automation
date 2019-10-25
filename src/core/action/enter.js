/**
 * @name enter
 */
'use strict'

const { getCurrentIterationData } = require('../iteration/getCurrentIterationData')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function enter
 * @description Enter an array of characters into an input field
 * 
 * @param {MessageBuilder} msg
 */
const enter = async (msg = {}) => {

  const currentData = await getCurrentIterationData(msg)

  // Clear the input field
  try {
    await msg.child.clear()
  } catch (e) {
    /* ignore */
  }

  await msg.child.sendKeys(currentData)

  const result = await ResultBuilder().setChild(msg.child)
    .setData(currentData)
    .setStatus('pass')
    .setDetails([`Action Successful: Entered ${currentData} in ${msg.content.control.name}`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setChild(msg.child)
    .setParent(msg.parent)
    .build()
  return Object.freeze(resultMsg)
}

module.exports = {
  enter
}
