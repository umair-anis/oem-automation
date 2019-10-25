/**
 * @name clickPreviousPage
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { createPagination } = require('./createPagination')
const { clickPaginationButton } = require('./clickPaginationButton')

/**
 * @function clickPreviousPage
 * @description Click the Previous Page Button on Pagination
 * 
 * @param {MessageBuilder} msg
 */
const clickPreviousPage = async (msg = {}) => {
  const pagination = await createPagination(msg)
  const button = await pagination.previousPage

  const resultMsg = await clickPaginationButton(msg, button, 'Previous Page Button')

  return Object.freeze(resultMsg)
}

module.exports = {
  clickPreviousPage
}
