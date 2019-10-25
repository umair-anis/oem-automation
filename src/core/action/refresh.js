/**
 * @name refresh
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function refresh
 * @description Refresh the browser
 * 
 * @param {MessageBuilder} msg
 */
const refresh = async (msg = {}) => {
  await msg.parent.navigate().refresh()

  const result = await ResultBuilder().setParent(msg.parent)
    .setStatus('pass')
    .setDetails([`Action Successful: Refreshed Window`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  refresh
}
