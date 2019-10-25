/**
 * @name isHeader
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { convertTableTo2D } = require('./convertTableTo2D')
const { getTableHeader } = require('./getTableHeader')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function isHeader
 * @description This function checks if an array of data in Message's Data
 *              exactly matches the current table's header
 *
 * @param {MessageBuilder} msg
 * @param {List[Elements]} msg.data
 */
const isHeader = async (msg = {}) => {

  const tableHeader = await getTableHeader(msg)

  const step = msg.content
  const header = step.data[0]
  var result = null

  try {
    for (var i = 0; i < tableHeader.length; i++) {
      if (!tableHeader[i].includes(header[i])) {
        throw new Error(`Table Header does not match data: ${tableHeader[i]} does not include ${header[i]}`)
      }
    }

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Table Header is equal to data`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Table Header failed to be equal to the data : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  isHeader
}
