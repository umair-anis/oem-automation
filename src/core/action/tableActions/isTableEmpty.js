/**
 * @name isTableEmpty
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { convertTableTo2D } = require('./convertTableTo2D')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function isTableEmpty
 * @description Check if the table is empty. 
 *              This is good for validating add/delete functions for small tables
 * 
 * @param {MessageBuilder} msg
 */
const isTableEmpty = async (msg = {}) => {
  const table = await convertTableTo2D(msg)
  var result = null

  if (table.length == 0) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Table is Empty`])
      .build()
  } else {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Performed isEmpty check on a table that has contents`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  isTableEmpty
}
