/**
 * @name getBreadcrumbText
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { createBreadcrumb } = require('./createBreadcrumb')

/**
 * @function getBreadcrumbText
 * @description Return a list of the Breadcrumb elements only containing their text representation
 * 
 * @param {MessageBuilder} msg 
 */
const getBreadcrumbText = async (msg = {}) => {
  const breadcrumb = await createBreadcrumb(msg)
  var breadcrumbText = []

  for (const breadcrumbElement of breadcrumb) {
    breadcrumbText.push(await breadcrumbElement.getText())
  }

  return Object.freeze(breadcrumbText)
}

module.exports = {
  getBreadcrumbText
}
