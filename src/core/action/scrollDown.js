/**
 * @name scrollDown
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function scrollDown
 * @description Scroll down a certain number of pixels
 */
const scrollDown = async (msg = {}) => {

  const element = msg.child
  const distance = step.data

  const script = `arguments[0].scrollBy({
    top: -${distance},
    behavior: 'smooth'
  });`

  await msg.parent.executeScript(script, element)

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus('pass')
    .setDetails([`Action Successful: Scroll Down ${distance} pixels`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()
  
  return Object.freeze(resultMsg)
}

module.exports = {
  scrollDown
}
