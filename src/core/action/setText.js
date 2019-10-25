/**
 * @name setText
 */
'use strict'

const { getCurrentIterationData } = require('../iteration/getCurrentIterationData')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function setText
 * @description Add a text attribute to an element
 * 
 * @param {MessageBuilder} msg 
 */
const setText = async (msg = {}) => {
  const parent = msg.parent
  const child = msg.child
  const step = msg.content
  const data = await getCurrentIterationData(msg)

  await parent.executeScript(`arguments[0].setAttribute(arguments[1], arguments[2]);`, child, 'value', data)

  const val = await child.getAttribute('value')

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Action Successful: Set Text of ${step.control.name} to ${data}.`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(parent)
    .setChild(child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  setText
}
