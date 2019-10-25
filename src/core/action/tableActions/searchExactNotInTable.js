/**
 * @name searchExactNotInTable
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')
const { searchExactInTable } = require('./searchExactInTable')

/**
 * @function searchExactNotInTable
 * @description Return if the exact search term "search" is not found in a table
 *
 * @param {MessageBuilder} msg
 * @param {string} msg.data
 */
const searchExactNotInTable = async (msg = {}) => {
  const resultInTableMsg = await searchExactInTable(msg)
  var status = null

  // Conduct a Search in Table then flip the status
  if (resultInTableMsg.content.status === 'fail') { status = 'pass' } else { status = 'fail' }

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus(status)
    .setDetails([`Conducted SearchNotInTable`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  searchExactNotInTable
}
