/**
 * @name searchInTable
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { convertTableTo2D } = require('./convertTableTo2D')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function searchInTable
 * @description Return the row index of the row that contains the search 'search'
 *
 * @param {MessageBuilder} msg
 * @param {string} msg.data
 */
const searchInTable = async (msg = {}) => {

  const table = await convertTableTo2D(msg)

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
      if (textElement.includes(search) && (rowIndex == -1 && columnIndex == -1)) {
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
  searchInTable
}
