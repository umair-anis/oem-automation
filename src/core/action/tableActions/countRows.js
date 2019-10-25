'use strict'

const { By } = require('selenium-webdriver')

/**
 * @description
 * @function
 * @param {Message} msg
 * @async
 * @returns Number of Rows in a table given its driver and xpath
 *
 */
const countRows = async (msg = {}, tablePath = '') => {
  if (msg == {} || tablePath == '') {
    throw new Error('Invalid Table Message or Path')
  }

  const parent = msg.parent
  const tableRows = await parent.findElements(By.xpath(tablePath + '//tr')) // Grabs all table rows
  const rowsCount = tableRows.length
  return rowsCount
}

module.exports = {
  countRows
}
