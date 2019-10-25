/**
 * @name createPagination
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By, until } = require('selenium-webdriver')

/**
 * @function createPagination
 * @description This program creates an object pagination button elements present on most
 *              tables. All tables that have a pagination are made up of some combination
 *              of these componnents:
 *              - Page Dropdown
 *              - Rows Per Page Dropdown
 *              - Get First Page
 *              - Get Previous Page
 *              - Get Next Page
 *              - Get Final Page
 *
 *              Unfortunately, there can be combinations that include and exclude some elements
 *              so an object that store the elements is best. This is used locally to other pagination actions
 *
 * @param {MessageBuilder} msg
 * @returns {pagination} A Pagination object that contain references to all of the buttons in pagination
 */
const createPagination = async (msg = {}) => {
  const parent = msg.parent

  this.buttonPageDropdown = null
  this.buttonRowsPerPageDropdown = null
  this.buttonFirstPage = null
  this.buttonPreviousPage = null
  this.buttonNextPage = null
  this.buttonLastPage = null

  // Static Pagination Paths that are consistent across all Paginations
  const pageDropdownPath = `[ng-change="$pagination.onPaginationChange()"]`
  const rowsPerPageDropdownPath = `[ng-model="$pagination.limit"]`
  const notificationsPerPageDropdownPath = `[ng-change="$ctrl.changePageSize()"]`
  const firstPagePath = `[aria-label="First"]`
  const previousPagePath = `[aria-label="Previous"]`
  const nextPagePath = `[aria-label="Next"]`
  const lastPagePath = `[aria-label="Last"]`

  // Pagination Load Buffer
  await parent.wait(until.elementLocated(By.xpath(`//md-table-pagination`)))
  await parent.sleep(500)

  // Page Selection Dropdown
  try {
    this.buttonPageDropdown = await parent.findElement(By.css(pageDropdownPath))
  } catch (e) {
    /* ignore */
  }

  // Rows per Page Selection Dropdown
  try {
    this.buttonRowsPerPageDropdown = await parent.findElement(By.css(rowsPerPageDropdownPath))
  } catch (e) {
    /* ignore */
  }

  // Notifications per Page Selection Dropdown
  try {
    this.buttonNotificationsPerPageDropdown = await parent.findElement(By.css(notificationsPerPageDropdownPath))
  } catch (e) {
    /* ignore */
  }

  // Next/Previous buttons
  try {
    this.buttonPreviousPage = await parent.findElement(By.css(previousPagePath))
    this.buttonNextPage = await parent.findElement(By.css(nextPagePath))
  } catch (e) {
    /* ignore */
  }

  // First/Last buttons
  try {
    this.buttonFirstPage = await parent.findElement(By.css(firstPagePath))
    this.buttonLastPage = await parent.findElement(By.css(lastPagePath))
  } catch (e) {
    /* ignore */
  }

  // An Object of buttons, otherwise null objects
  const pagination = {
    pageDropdown: this.buttonPageDropdown,
    rowsPerPageDropdown: this.buttonRowsPerPageDropdown,
    notificationsPerPageDropdown: this.buttonNotificationsPerPageDropdown,
    firstPage: this.buttonFirstPage,
    previousPage: this.buttonPreviousPage,
    nextPage: this.buttonNextPage,
    lastPage: this.buttonLastPage
  }

  return Object.freeze(pagination)
}

module.exports = {
  createPagination
}
