/**
 * @name close
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function close
 * @description Close and Quit the Browser and its driver
 *
 * @param {MessageBuilder} msg
 */
const close = async (msg = {}) => {
  let parent = msg.parent

  await parent.close()
  await parent.quit()
  parent = null

  const actionResult = await ResultBuilder().setStatus('pass')
    .setParent(parent)
    .setDetails([`Action Successful: Closed the Brower Window, Ended the Session.`])
    .build()

  const actionMsg = await MessageBuilder().setContent(actionResult)
    .setParent(parent)
    .build()

  return Object.freeze(actionMsg)
}

module.exports = {
  close
}
