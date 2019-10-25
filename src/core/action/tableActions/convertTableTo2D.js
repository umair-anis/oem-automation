/**
 * @name convertTableTo2D
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')
const { countRows } = require('./countRows')
const { countCells } = require('./countCells')

/**
 * @function convertTableTo2D
 * @description Converts a table with an xpath property to a 2D array of elements
 *              This is good for simplified search and manipulation.
 *              Removes tightly coupled nested table elements in other actions or cases. It can all run through this one function
 *
 * The table is passed in as a Message
 * @param {table} msg
 */
const convertTableTo2D = async (msg = {}) => {

  // Get the table xpath via its 'propertyPath'
  const parent = msg.parent
  const tablePath = msg.content.control.property.path
  const headerPath = tablePath + '/thead'
  const bodyPath = tablePath + '/tbody'

  let mainPath = tablePath
  let rowsCount = null
  const table = []

  // Check if there is a table header
  try {
    const headerElement = await parent.findElements(By.xpath(headerPath))
  } catch (e) {
  }

  // Check if there is a table body
  try {
    const bodyElement = await parent.findElements(By.xpath(bodyPath))
    mainPath = bodyPath
  } catch (e) {
  }

  // Check if there are table rows to iterate
  try {
    rowsCount = await countRows(msg, mainPath)
  } catch (e) {
  }

  var i, j

  // Add Table Column Titles to table information
  try {
    // Count the Cells in row table/thead/tr[1]
    const rowPath = headerPath + '/tr[1]'
    const cellsCount = await countCells(msg, rowPath + '//th')

    const headerRow = []
    for (j = 1; j < cellsCount; j++) {
      // Get the element at table/thead/tr[1]/th[j]
      const cellPath = rowPath + '/th[' + j + ']'
      var element = await parent.findElement(By.xpath(cellPath))
      const elementText = await element.getText()

      // This handles header elements that do not have any text. These
      // are usually found on header endpoints index at 1, n - 1
      if (elementText != '' && headerRow.length < cellsCount - 1) {
        element = await returnTrueElement(msg, headerPath, mainPath, true, 1, j)
        headerRow.push(element)
      }
    }
    table.push(headerRow)
  } catch (e) {}

  // Add Table Rows as an object of strings to table information
  try {
    for (i = 1; i <= rowsCount; i++) {
      // Count the Cells in row mainPath/tr[i]
      const rowPath = mainPath + '/tr[' + i + ']'
      const cellsCount = await countCells(msg, rowPath + '//td')

      const tableRow = []
      for (j = 1; j <= cellsCount; j++) {
        // Get the element at mainPath/tr[i]/td[j]
        element = await returnTrueElement(msg, headerPath, mainPath, false, i, j)
        const elementText = await element.getText()

        // This check handles element that are the last column of the row
        // sometimes these exist, sometimes they don't
        if (elementText != '') {
          tableRow.push(element)
        } else if (j < cellsCount) {
          tableRow.push(element)
        }
      }
      table.push(tableRow)
    }
  } catch (e) {
    throw new Error('Error Adding Table Rows')
  }

  return Object.freeze(table)
}

/**
 * @function returnTrueElement
 * @description Return the element if the element is a box, a link, a button, or text. Includes more than just the text
 *              This helps avoid elements that have nested buttons or nested links.
 * 
 * @param {MessageBuilder} msg 
 * @param {string} headerPath 
 * @param {string} mainPath 
 * @param {boolean} isHeader 
 * @param {number} rowIndex 
 * @param {number} columnIndex 
 */
const returnTrueElement = async (msg = {}, headerPath = '', mainPath = '', isHeader = false, rowIndex = -1, columnIndex = -1) => {
  const parent = msg.parent
  var elementPath = null
  var element = null

  // Check if it is a header because they have different xpaths
  if (isHeader) {
    elementPath = headerPath + `[${rowIndex}]/tr/th[${columnIndex}]`
  } else {
    elementPath = mainPath + `/tr[${rowIndex}]/td[${columnIndex}]`
  }

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
  convertTableTo2D
}
