/**
 * @name convertTableColumnToList
 * @author Avery Swank
 * 8/19/2019
 */

'use strict'

const { By } = require('selenium-webdriver')
const { countRows } = require('./countRows')

/**
 * @function convertTableColumnToList
 * @description Converts a table column at index "columnIndex" to a list of elements
 *
 * @param {MessageBuilder} msg
 * @param {number} columnIndex
 */
const convertTableColumnToList = async (msg = {}, columnIndex = -1) => {
  
  // Get the table xpath via its 'propertyPath'
  const parent = msg.parent
  const tablePath = msg.content.control.property.path
  const bodyPath = tablePath + '/tbody'

  let mainPath = tablePath
  let rowsCount = null
  const column = []

  // Check if there is a table body
  try {
    const bodyElement = await parent.findElements(By.xpath(bodyPath))
    mainPath = bodyPath
  } catch (e) {
    /* ignore */
  }

  // Check if there are table rows to iterate
  try {
    rowsCount = await countRows(msg, mainPath)
  } catch (e) {
    throw new Error(`Could not find table rows : ${e}`)
  }

  var i
  // Add Column Rows at index 'columnIndex'
  try {
    for (i = 1; i <= rowsCount; i++) {
      // Get the element at mainPath/tr[i]/td[j]
      const element = await returnTrueElement(msg, mainPath, i, columnIndex)
      const elementText = await element.getText()

      if (elementText != '') {
        column.push(element)
      }
    }
  } catch (e) {
    throw new Error(`Error Adding Table Columns: ${e}`)
  }

  return Object.freeze(column)
}

/**
 * @function returnTrueElement
 * @description Return the element if the element is a box, a link, a button, or text. Includes more than just the text
 *              This helps avoid elements that have nested buttons or nested links.
 * 
 * @param {MessageBuilder} msg 
 * @param {string} mainPath 
 * @param {number} rowIndex 
 * @param {number} columnIndex 
 */
const returnTrueElement = async (msg = {}, mainPath = '', rowIndex = -1, columnIndex = -1) => {
  const parent = msg.parent
  var elementPath = null
  var element = null

  elementPath = mainPath + `/tr[${rowIndex}]/td[${columnIndex}]`

  const elementLinkPath = elementPath + `//span/a`
  const elementBoxPath = elementPath + `//md-checkbox`
  const elementButtonPath = elementPath + `//button`
  const elementTextPath = elementPath

  // Check if it is a box
  try {
    element = await parent.findElement(By.xpath(elementBoxPath))
    return Object.freeze(element)
  } catch (e) {}

  // Check if it is a button
  try {
    element = await parent.findElement(By.xpath(elementButtonPath))
    return Object.freeze(element)
  } catch (e) {}

  // Check if it is a link
  try {
    element = await parent.findElement(By.xpath(elementLinkPath))
    return Object.freeze(element)
  } catch (e) {}

  // Check if there is text present
  try {
    element = await parent.findElement(By.xpath(elementTextPath))
    return Object.freeze(element)
  } catch (e) {}

  return Object.freeze(element)
}

module.exports = {
  convertTableColumnToList
}
