/**
 * @name isCurrentFilter
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function isCurrentFilter
 * @description Check if a Message's Data is a current filter
 * 
 * @param {MessageBuilder} msg
 * @param {string} msg.data
 */
const isCurrentFilter = async (msg = {}) => {
  
  const parent = msg.parent
  const step = msg.content
  const filterSearch = step.data[0]
  const details = []

  // Static Path used for Filter Result's chip filters
  const filtersPath = `//md-chip//md-chip-template//span`
  var currentFilters = []
  var result = null

  // Create a list of the current filters
  try {
    const filters = await parent.findElements(By.xpath(filtersPath))

    var currentFilters = []
    for (const filter of filters) {
      const filterText = await filter.getText()
      currentFilters.push(filterText)
      details.push(`Added ${filterText} to list of current filters`)
    }
  } catch (e) {
    throw new Error(`Cannot find Current Filter's elements`)
  }

  // Check if the filter is in the list of currentFilters
  const isFilter = currentFilters.includes(filterSearch)

  if (isFilter) {
    details.push(`Successfully found ${filterSearch} in list of current filters`)
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails(details)
      .build()
  } else {
    details.push(`Failed to find ${filterSearch} in list of current filters`)
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails(details)
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  isCurrentFilter
}
