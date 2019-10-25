/**
 * @name isDisplayed
 */
'use strict'

const { actions } = require('./actions')

/**
 * @function isDisplayed
 * @description Wait until the Message's Control is displayed
 * 
 * @param {MessageBuilder} msg
 */
const isDisplayed = async (msg = {}) => {
  const result = await actions().wait(msg)
  return Object.freeze(result)
}

module.exports = {
  isDisplayed
}
