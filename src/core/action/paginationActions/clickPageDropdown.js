/**
 * @name clickPageDropdown
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { createPagination } = require('./createPagination')
const { clickPaginationButton } = require('./clickPaginationButton')

/**
 * @function clickPageDropdown
 * @description Click the Page Dropdown on Pagination
 * 
 * @param {MessageBuilder} msg
 */
const clickPageDropdown = async (msg = {}) => {
  const pagination = await createPagination(msg)
  const button = await pagination.pageDropdown

  const resultMsg = await clickPaginationButton(msg, button, 'Page Dropdown')

  return Object.freeze(resultMsg)
}

module.exports = {
  clickPageDropdown
}
