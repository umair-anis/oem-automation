/**
 * @name clickTableEnd
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { convertTableTo2D } = require('./convertTableTo2D')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function clickTableEnd
 * @description Click a Table Row's End Button that contains a search term in the same row
 * 
 * @param {MessageBuilder} msg
 */
const clickTableEnd = async (msg = {}) => {

  const table = await convertTableTo2D(msg)
  var result = null
  const step = msg.content
  const currentData = step.data
  const search = currentData

  // Ends are always to the most right of the table, thus the columnIndex is always length - 1
  var rowIndex = -1
  var columnIndex = -1

  // Search the Table for the search term, if it is found, assign the term to the first row with the term
  var i, j
  for (i = 0; i < table.length; i++) {
    for (j = 0; j < table[i].length; j++) {
      const textElement = await table[i][j].getText()

      // Set to only first instance
      if (textElement == search && (rowIndex == -1 && columnIndex == -1)) {
        rowIndex = i
        columnIndex = table[i].length - 1
        break
      }
    }
  }

  try {
    const element = table[rowIndex][columnIndex]
    await element.click()

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Clicked Trash [${rowIndex}, ${columnIndex}]`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to Click [${rowIndex}, ${columnIndex}] End : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickTableEnd
}
