/**
 * @name clickPaginationButton
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { MessageBuilder } = require('../../layer/MessageBuilder')
const { ResultBuilder } = require('../../result/ResultBuilder')

/**
 * @function clickPaginationButton
 * @description This function handles all of the button logic for Pagination. 
 *              Since pagination is an object that contains all possible pagination buttons and dropdowns, 
 *              a check for the buttons being null is required
 * 
 * @param {MessageBuilder} msg
 * @param {Element} button
 * @param {string} name
 */
const clickPaginationButton = async (msg = {}, button = {}, name = '') => {
  var result = null

  if (button == null) {
    throw new Error(`Pagination: ${name} is null`)
  }

  try {
    await button.click()
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('pass')
      .setDetails([`Clicked Pagination ${name}`])
      .build()
  } catch (e) {
    result = await ResultBuilder().setChild(msg.child)
      .setStatus('fail')
      .setDetails([`Failed to Click Pagination ${name} : ${e}`])
      .build()
  }

  const resultMsg = await MessageBuilder().setContent(result)
    .setParent(msg.parent)
    .setChild(msg.child)
    .build()

  return Object.freeze(resultMsg)
}

module.exports = {
  clickPaginationButton
}
