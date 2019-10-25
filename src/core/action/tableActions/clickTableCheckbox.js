/**
 * @name clickTableCheckbox
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { convertTableTo2D } = require('./convertTableTo2D')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function clickTableCheckbox
 * @description Click the Checkbox that contains the search term in the same table row
 * 
 * @param {MessageBuilder} msg
 */
const clickTableCheckbox = async (msg = {}) => {

  const table = await convertTableTo2D(msg)
  var result = null
  const step = msg.content
  const currentData = step.data
  const search = currentData

  // Checkboxes are always to the most left of the table, thus the columnIndex is always 0
  var rowIndex = -1
  var columnIndex = 0

  // Search the Table for the search term, if it is found, assign the term to the first row with the term
  var i, j
  for (i = 0; i < table.length; i++) {
    for (j = 0; j < table[i].length; j++) {
      const textElement = await table[i][j].getText()
      // Set to only first instance
      if (textElement.includes(search) && rowIndex === -1) {
        rowIndex = i
        break
      }
    }
  }

  try {
    const elementBox = await table[rowIndex][columnIndex]
    await elementBox.click()

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Clicked Checkbox [${rowIndex}, ${columnIndex}]`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to click Checkbox [${rowIndex}, ${columnIndex}] : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickTableCheckbox
}
