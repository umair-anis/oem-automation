/**
 * @name validateUrl
 * @author Avery Swank
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function validateUrl
 * @description Checks if the url contains the Message's Data
 *
 * @param {MessageBuilder} msg
 */
const validateUrl = async (msg = {}) => {
  const parent = msg.parent
  const step = msg.content
  var result = null

  const search = step.data
  let urlText = null

  urlText = await parent.getCurrentUrl()

  if (urlText.includes(search)) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Action Successful: Validate Url ${urlText} contains ${search}`])
      .build()
  } else {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Action FAILED: Validate Url ${urlText} does not contain: ${search}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  validateUrl
}
