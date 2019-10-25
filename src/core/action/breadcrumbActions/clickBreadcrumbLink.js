/**
 * @name clickBreadcrumbLink
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')
const { createBreadcrumb } = require('./createBreadcrumb')
const { getBreadcrumbText } = require('./getBreadcrumbText')

/**
 * @function clickBreadcrumbLink
 * @description Click a particular link in the breadcrumb that exactly matches the parameter
 * 
 * @param {MessageBuilder} msg 
 * @param {string} msg.data
 */
const clickBreadcrumbLink = async (msg = {}) => {
  const breadcrumb = await createBreadcrumb(msg)
  const breadcrumbText = await getBreadcrumbText(msg)
  const data = msg.content.data
  var result = null
  var link = null

  for (var i = 0; i < breadcrumbText.length; i++) {
    if (breadcrumbText[i] == data) {
      link = breadcrumb[i]
    }
  }

  try {
    await link.click()

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Click Breadcrumb Link`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Cannot click Breadcrumb Link: ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickBreadcrumbLink
}
