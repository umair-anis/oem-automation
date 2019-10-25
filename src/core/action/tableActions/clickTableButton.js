/**
 * @name clickTableButton
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { convertTableTo2D } = require('./convertTableTo2D')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function clickTableButton
 * @description Click the Button in a particular column index with a search term
 * 
 * @example steps.push(await StepBuilder().setControl(await vehiclesUI().table)
                            .setAction(await actions().clickTableButton)
                            .setData([ search, 7 ])
                            .build())
            
            This will click the Button in the 7th column index that also has the term "search" somewhere in the same row
 * 
 * @param {MessageBuilder} msg
 * @param {[string, number]} msg.data
 */
const clickTableButton = async (msg = {}) => {
  const table = await convertTableTo2D(msg)
  var result = null

  const step = msg.content
  const search = step.data[0][0]
  var rowIndex = -1
  var columnIndex = step.data[0][1]

  // Search the Table for the search term, if it is found, assign the term to the first row with the term
  var i, j
  for (i = 0; i < table.length; i++) {
    for (j = 0; j < table[i].length; j++) {
      const textElement = await table[i][j].getText()

      // Set to only first instance
      if (textElement == search && (rowIndex == -1)) {
        rowIndex = i
        break
      }
    }
  }

  try {
    const element = table[rowIndex][columnIndex]
    await element.click()

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`[${rowIndex}, ${columnIndex}] button clicked`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to click [${rowIndex}, ${columnIndex}] button : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickTableButton
}
