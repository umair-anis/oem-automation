/**
 * @name getSearchResults
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')

/**
 * @function getSearchResults
 * @description A Global Search Results page can have a very dynamic list of results. This simplifies the result entries into a list
 *              A Global Search could be made up of any combination of functions or pages such as: Versions, Vehicle Groups, Users, DOGs,
 *              in any order based on the relevance to the search
 * 
 * @param {MessageBuilder} msg
 * @returns {List[button: element, text: string]} results
 */
const getSearchResults = async (msg = {}) => {
  const parent = msg.parent
  var result = null

  const results = []

  try {
    const resultsEntries = await parent.findElements(By.xpath(`//md-list-item//button`))
    const resultsCount = resultsEntries.length + 1

    for (var i = 2; i <= resultsCount; i++) {
      var entryButton = await parent.findElement(By.xpath(`//md-list-item[${i}]//button`))
      var entryText = await parent.findElement(By.xpath(`//md-list-item[${i}]//p`))
      entryText = await entryText.getText()

      results.push({ button: entryButton, text: entryText })
    }
  } catch (e) {
    /* ignore */
  }

  return Object.freeze(results)
}

module.exports = {
  getSearchResults
}
