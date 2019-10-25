/**
 * @name searchInTableColumn
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { convertTableColumnToList } = require('./convertTableColumnToList')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function searchInTableColumn
 * @description Return if a search term "search" is not found in a table
 *
 * @param {MessageBuilder} msg
 * @param {string} msg.data
 */
const searchInTableColumn = async (msg = {}) => {
  const step = msg.content
  const columnIndex = step.data[0][0]
  const search = step.data[0][1]

  const column = await convertTableColumnToList(msg, columnIndex)

  var rowIndex = -1
  var result = null

  // Iterate through table to find 'search', only return the first
  // instance of the term 'search'
  var i
  for (i = 0; i < column.length; i++) {
    const textElement = await column[i].getText()
    // Set to only first instance
    if (textElement.includes(search)) {
      rowIndex = i
      break
    }
  }

  if (rowIndex != -1) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Found: ${search} at row: ${rowIndex}`])
      .build()
  } else {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to find: ${search} at row: ${rowIndex}`])
      .build()
  }
  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  searchInTableColumn
}
