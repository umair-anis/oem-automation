/**
 * @name isSearchResults
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')
const { getSearchResults } = require('./getSearchResults')

/**
 * @function isSearchResults
 * @description Validate are Search Results Visible. TODO: write it so it compares the results to a baseline, however, I found that the same search results
 *              can have a dynamically changing results list, so I scrarched in and simplified it to a isVisible check
 * 
 * @param {MessageBuilder} msg
 * @param {List[text]} msg.data
 */
const isSearchResults = async (msg = {}) => {
  const parent = msg.parent
  const step = msg.content
  const dataList = step.data[0]
  var result = null

  const searchResults = await getSearchResults(msg)

  try {
    for (var i = 0; i < searchResults.length; i++) {
      if (!searchResults[i].text.includes(dataList[i])) {
        throw new Error(`Search Results does not match data`)
      }
    }

    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Matches Global Search Results`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to Matches Global Search Results: ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  isSearchResults
}
