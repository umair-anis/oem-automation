/**
 * @name enterFilterResultCustomSelect
 */
'use strict'

const { By } = require('selenium-webdriver')
const { waitUntilVisible } = require('../waitUntilVisible')
const { waitUntilPageLoaded } = require('../waitUntilPageLoaded')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')
const { createFiltersBar } = require('./createFiltersBar')

/**
 * @function enterFilterResultCustomSelect
 * @description Enter a list of search terms into the 'Filter Results' field.
 *              Click the first Filter Dropdown option or one specified
 * 
 * @param {MessageBuilder} msg
 * @param {[List[string], number]} msg.data
 */
const enterFilterResultCustomSelect = async (msg = {}) => {
  // Get Search data
  const parent = msg.parent
  const step = msg.content
  const searches = step.data[0]
  const optionNumber = step.data[1] || 1
  const details = []
  const filtersBar = await createFiltersBar(msg)
  var result = null

  // Static Path used across all filter searches
  const searchOption = `//li[@md-virtual-repeat][${optionNumber}]`

  try {
    // Enter the list of searches
    for (const search of searches) {
      await filtersBar.fieldFilterResults.sendKeys(search)

      // Wait until the dropdown is visible
      await waitUntilVisible(msg, `//md-virtual-repeat-container//li`)

      details.push(`Entered ${search} into Field Result`)

      // Wait for the First Dropdown optin to load
      const firstSearchDropdown = await parent.findElement(By.xpath(searchOption))
      await firstSearchDropdown.click()

      // Wait for the portal to finish loading
      // Static wait for extra table buffer time
      await waitUntilPageLoaded(msg)
      await parent.sleep(1000)

      details.push(`Successfully Clicked ${optionNumber} Search Dropdown`)
    }

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails(details)
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to search for ${searches} : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  enterFilterResultCustomSelect
}
