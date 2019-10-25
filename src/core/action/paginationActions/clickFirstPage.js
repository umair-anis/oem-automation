/**
 * @name clickFirstPage
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { createPagination } = require('./createPagination')
const { clickPaginationButton } = require('./clickPaginationButton')

/**
 * @function clickFirstPage
 * @description Click the First Page Button on Pagination
 * 
 * @param {MessageBuilder} msg
 */
const clickFirstPage = async (msg = {}) => {
  const pagination = await createPagination(msg)
  const button = await pagination.firstPage

  const resultMsg = await clickPaginationButton(msg, button, 'First Page Button')

  return Object.freeze(resultMsg)
}

module.exports = {
  clickFirstPage
}
