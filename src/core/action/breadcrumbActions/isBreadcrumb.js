/**
 * @name isBreadcrumb
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')
const { getBreadcrumbText } = require('./getBreadcrumbText')

/**
 * @function isBreadcrumb
 * @description Return a pass if the Message Data exactly matches the current Page's Breadcrumb
 * 
 * @param {MessageBuilder} msg 
 * @param {List[Text]} msg.data
 */
const isBreadcrumb = async (msg = {}) => {
  const breadcrumb = await getBreadcrumbText(msg)
  const data = msg.content.data[0]
  var result = null
  var isEqual = true

  for (var i = 0; i < breadcrumb.length; i++) {
    if (breadcrumb[i] !== data[i]) {
      isEqual = false
    }
  }

  if (isEqual) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Action Successful: Data is the Current Breadcrumb: ${data}`])
      .build()
  } else {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Action FAILED: Data is not the Current Breadcrumb: ${data} against ${breadcrumb}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  isBreadcrumb
}
