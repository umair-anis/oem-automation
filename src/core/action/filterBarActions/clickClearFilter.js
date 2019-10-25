/**
 * @name clickClearFilter
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')
const { createFiltersBar } = require('./createFiltersBar')

/**
 * @function clickClearFilter
 * @description Click the Clear Filter Button on the Control Filters Bar
 * 
 * @param {MessageBuilder} msg
 */
const clickClearFilter = async (msg = {}) => {
  const filtersBar = await createFiltersBar(msg)
  const button = filtersBar.clearFilters
  var result = null

  try {
    await button.click()

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Successfully Clicked Clear Filter`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to Click Clear Filter: ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickClearFilter
}
