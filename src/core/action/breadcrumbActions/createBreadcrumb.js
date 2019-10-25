/**
 * @name createBreadcrumb
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')

/**
 * @function createBreadcrumb
 * @description Convert a breadcrumb element to a list of its text or links. (maintains order)
 *
 * @param {MessageBuilder} msg
 * 
 * @returns {List[Text or Link]}
 */
const createBreadcrumb = async (msg = {}) => {

  const parent = msg.parent
  const breadcrumbPath = `[states="$ctrl.breadcrumbStates"]`
  const breadcrumbElementsPath = `//div[@class="breadcrumb"]/ol//li`
  var breadcrumb = []

  // Find the Breadcrumb on the page
  try {
    var breadcrumbParent = await parent.findElement(By.css(breadcrumbPath))
  } catch (e) {
    throw new Error(`Cannot find breadcrumb: ${breadcrumbPath} : ${e}`)
  }

  // Find and Add the listed elements to a list
  try {
    const listedElements = await parent.findElements(By.xpath(breadcrumbElementsPath))

    for (var i = 1; i <= listedElements.length; i++) {
      const breadcrumbElement = await returnTrueElement(parent, breadcrumbElementsPath, i)
      breadcrumb.push(breadcrumbElement)
    }
  } catch (e) {
    // If a page has multiple tabs with multiple breadcrumbs, only look at the visible breadcrumb
    /* ignore */
  }

  return Object.freeze(breadcrumb)
}

/**
 * @function returnTrueElement
 * @description Return the element stored in the breadcrumb. Returns more than just the text within the element
 * 
 * @param {Driver} parent 
 * @param {string} path 
 * @param {number} index 
 */
const returnTrueElement = async (parent = {}, path = ``, index = 0) => {
  const linkPath = path + `[${index}]//span//a`
  const textPath = path + `[${index}]//span`
  var element = null

  // Element is a Link
  try {
    element = await parent.findElement(By.xpath(linkPath))
    return Object.freeze(element)
  } catch (e) {}

  // Element is a Text
  try {
    element = await parent.findElement(By.xpath(textPath))
    return Object.freeze(element)
  } catch (e) {}

  throw new Error(`Cannot find Breadcrumb Listed Element`)
}

module.exports = {
  createBreadcrumb
}
