/**
 * @name clickRowsPerPageDropdown
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { createPagination } = require('./createPagination')
const { clickPaginationButton } = require('./clickPaginationButton')

/**
 * @function clickRowsPerPageDropdown
 * @description Click the Rows Per Page Dropdown on Pagination
 */
const clickRowsPerPageDropdown = async (msg = {}) => {
  const pagination = await createPagination(msg)
  const button = await pagination.rowsPerPageDropdown

  const resultMsg = await clickPaginationButton(msg, button, 'Rows Per Page Button')

  return Object.freeze(resultMsg)
}

module.exports = {
  clickRowsPerPageDropdown
}
