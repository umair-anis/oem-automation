'use strict'

const { By } = require('selenium-webdriver')

/**
 * @description
 * @function
 * @param {Message} msg
 * @async
 * @returns Number of Cells in a row given its driver and xpath
 *
 */
const countCells = async (msg = {}, rowPath = '') => {
  if (msg == {} || rowPath == '') {
    throw new Error('Invalid Table Message or Path')
  }

  const parent = msg.parent
  const row = await parent.findElement(By.xpath(rowPath))
  const headerCells = await row.findElements(By.xpath(rowPath))
  const cellsCount = headerCells.length
  return cellsCount
}

module.exports = {
  countCells
}
