/**
 * @name navigate
 */
'use strict'

const { getCurrentIterationData } = require('../iteration/getCurrentIterationData')
const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function navigate
 * @description Navigate to Message's Data
 * 
 * @param {MessageBuilder} msg
 */
const navigate = async (msg = {}) => {
  
  const parent = msg.parent
  const data = await getCurrentIterationData(msg)

  await parent.navigate(data)

  const result = await ResultBuilder().setData(data)
    .setStatus('pass')
    .setDetails([`Action Successful: Navigated with ${data}`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(parent)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  navigate
}
