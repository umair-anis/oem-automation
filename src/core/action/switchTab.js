/**
 * @name switchTab
 */
'use strict'

const { MessageBuilder } = require('../layer/MessageBuilder')
const { ResultBuilder } = require('../result/ResultBuilder')

/**
 * @function switchTab
 * @description Switch Current Browser Tab to a different Tab "tabIndex" in the same Browser.
 *              Throws an error if stays on the same tab
 *
 * @param {MessageBuilder} msg
 */
const switchTab = async (msg = {}) => {
  const parent = msg.parent
  const step = msg.content
  const tabIndex = step.data
  var result = null

  const oldTab = await parent.getWindowHandle()

  // Switch to the tab specified in 'tabIndex'
  const tabs = await parent.getAllWindowHandles()
  await parent.switchTo().window(tabs[tabIndex])

  const newTab = await parent.getWindowHandle()

  if (oldTab != newTab) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Action Successful: Switched to a new Tab ${newTab}`])
      .build()
  } else {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Action FAILED: Did Not Switch to a Different Tab : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  switchTab
}
