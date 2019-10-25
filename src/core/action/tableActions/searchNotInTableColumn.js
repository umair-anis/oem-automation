/**
 * @name searchNotInTableColumn
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')
const { searchInTableColumn } = require('./searchInTableColumn')

/**
 * @function searchNotInTableColumn
 * @description Return if the search term "search" is not found in a particular table column
 * 
 * @param {MessageBuilder} msg 
 * @param {List[Elements]} msg.data
 */
const searchNotInTableColumn = async (msg = {}) => {
  const resultInTableMsg = await searchInTableColumn(msg)
  var status = null

  // Conduct a Search in Table then flip the status
  resultInTableMsg.content.status === 'fail' ? status = 'pass' : status = 'fail'

  const result = await ResultBuilder().setChild(msg.child)
    .setStatus(status)
    .setDetails([`Conducted SearchNotInTableColumn`])
    .build()

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  searchNotInTableColumn
}
