/**
 * @name clickNextPage
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { createPagination } = require('./createPagination')
const { clickPaginationButton } = require('./clickPaginationButton')

/**
 * @function clickNextPage
 * @description Click the Next Page Button on Pagination
 * 
 * @param {MessageBuilder} msg
 */
const clickNextPage = async (msg = {}) => {
  const pagination = await createPagination(msg)
  const button = await pagination.nextPage

  const resultMsg = await clickPaginationButton(msg, button, 'Next Page Button')

  return Object.freeze(resultMsg)
}

module.exports = {
  clickNextPage
}
