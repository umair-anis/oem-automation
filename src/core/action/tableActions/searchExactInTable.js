/**
 * @name searchExactInTable
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { convertTableTo2D } = require('./convertTableTo2D')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function searchExactInTable
 * @description Return the row index of the row containing the exact search 'search'
 *
 * @param {MessageBuilder} msg
 * @param {string} msg.data
 */
const searchExactInTable = async (msg = {}) => {
  const table = await convertTableTo2D(msg)

  // Get Search term specified in StepBuilder.setData()
  const step = msg.content
  const currentData = step.data

  const search = currentData

  var rowIndex = -1
  var columnIndex = -1
  var result = null

  // Iterate through table to find 'search', only return the first
  // instance of the term 'search'
  var i, j
  for (i = 0; i < table.length; i++) {
    for (j = 0; j < table[i].length; j++) {
      const textElement = await table[i][j].getText()
      // Set to only first instance
      if (textElement.trim() === search.toString().trim() && (rowIndex === -1 && columnIndex === -1)) {
        rowIndex = i
        columnIndex = j
      }
    }
  }

  if (rowIndex != -1 && columnIndex != -1) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Found: ${search} at row: ${rowIndex} column: ${columnIndex}`])
      .build()
  } else {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to find: ${search} at row: ${rowIndex} column: ${columnIndex}`])
      .build()
  }
  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  searchExactInTable
}
