/**
 * @name clickLastPage
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { createPagination } = require('./createPagination')
const { clickPaginationButton } = require('./clickPaginationButton')

/**
 * @function clickLastPage
 * @description Click the Last Page Button on Pagination
 * 
 * @param {MessageBuilder} msg
 */
const clickLastPage = async (msg = {}) => {
  const pagination = await createPagination(msg)
  const button = await pagination.lastPage

  const resultMsg = await clickPaginationButton(msg, button, 'Last Page Button')

  return Object.freeze(resultMsg)
}

module.exports = {
  clickLastPage
}
