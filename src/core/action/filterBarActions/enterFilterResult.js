/**
 * @name enterFilterResult
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')
const { waitUntilVisible } = require('../waitUntilVisible')
const { waitUntilPageLoaded } = require('../waitUntilPageLoaded')
const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')
const { createFiltersBar } = require('./createFiltersBar')

/**
 * @function enterFilterResult
 * @description Enter a list of search terms into the 'Filter Results' field.
 *              Click the Filter Dropdown that matches the more specific type
 * 
 * @param {MessageBuilder} msg
 * @param {List[string]} msg.data
 */
const enterFilterResult = async (msg = {}) => {
  // Get Search data
  const parent = msg.parent
  const step = msg.content
  const searches = step.data[0]
  const details = []

  const filtersBar = await createFiltersBar(msg)
  var result = null

  const dropdownByTypePath = `//ul//li[@md-virtual-repeat="item in $mdAutocompleteCtrl.matches"][2]`
  const dropdownPath = `//ul//li[@md-virtual-repeat="item in $mdAutocompleteCtrl.matches"][1]`

  try {

    for (const search of searches) {
      await filtersBar.fieldFilterResults.sendKeys(search)

      // Wait until the dropdown is visible
      await waitUntilVisible(msg, `//md-virtual-repeat-container//li`)

      details.push(`Entered ${search} into Field Result`)

      // Wait for the Dropdown by type to load first because it is more accurate than the first
      // dropdown option
      try {
        const searchTypeDropdown = await parent.findElement(By.xpath(dropdownByTypePath))
        await searchTypeDropdown.click()
      } catch (e) {
        const searchDropdown = await parent.findElement(By.xpath(dropdownPath))
        await searchDropdown.click()
      }

      // Wait for the portal to finish loading
      // Static wait for extra table buffer time
      await waitUntilPageLoaded(msg)
      await parent.sleep(1200)

      details.push(`Successfully Clicked Dropdown`)
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
  enterFilterResult
}
