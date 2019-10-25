'use strict'

/**
 * @description Factory function used to create a single point of instantiation for lower-level
 * action functions used by the test automation API.
 * @function actions
 * @returns {any} Returns an action function to be used to execute an operation against the AUT.
 */
const actions = () => {
  this.backward = require('./backward').backward
  this.clear = require('./clear').clear
  this.click = require('./click').click
  this.close = require('./close').close
  this.compareFormErrors = require('./compareFormErrors').compareFormErrors
  this.compare = require('./compare').compare
  this.contains = require('./contains').contains
  this.doubleClick = require('./doubleClick').doubleClick
  this.enter = require('./enter').enter
  this.escape = require('./escape').escape
  this.forward = require('./forward').forward
  this.hitEnter = require('./hitEnter').hitEnter
  this.hitShiftTab = require('./hitShiftTab').hitShiftTab
  this.isDisplayed = require('./isDisplayed').isDisplayed
  this.navigate = require('./navigate').navigate
  this.open = require('./open').open
  this.pageDown = require('./pageDown').pageDown
  this.pageUp = require('./pageUp').pageUp
  this.refresh = require('./refresh').refresh
  this.scrape = require('./scrape').scrape
  this.scrollDown = require('./scrollDown').scrollDown
  this.scrollLeft = require('./scrollLeft').scrollLeft
  this.scrollRight = require('./scrollRight').scrollRight
  this.scrollToElement = require('./scrollToElement').scrollToElement
  this.scrollUp = require('./scrollUp').scrollUp
  this.select = require('./select').select
  this.sendDelete = require('../rest/sendDelete').sendDelete
  this.setGet = require('../rest/sendGet').sendGet
  this.sendPatch = require('../rest/sendPatch').sendPatch
  this.sendPost = require('../rest/sendPost').sendPost
  this.setPut = require('../rest/sendPut').sendPut
  this.setText = require('./setText').setText
  this.switchTab = require('./switchTab').switchTab
  this.takeScreenshot = require('./takeScreenshot').takeScreenshot
  this.translate = require('./translate').translate
  this.wait = require('./wait').wait
  this.waitToDisappear = require('./waitToDisappear').waitToDisappear
  this.waitUntilPageLoaded = require('./waitUntilPageLoaded').waitUntilPageLoaded
  this.waitUntilVisible = require('./waitUntilVisible').waitUntilVisible
  this.validate = require('./validate').validate
  this.validateUrl = require('./validateUrl').validateUrl

  // Breadcrumb Actions
  this.isBreadcrumb = require('./breadcrumbActions/isBreadcrumb').isBreadcrumb
  this.clickBreadcrumbLink = require('./breadcrumbActions/clickBreadcrumbLink').clickBreadcrumbLink

  // Filter Actions
  this.enterFilterResult = require('./filterBarActions/enterFilterResult').enterFilterResult
  this.enterFilterResultCustomSelect = require('./filterBarActions/enterFilterResultCustomSelect').enterFilterResultCustomSelect
  this.clickClearFilter = require('./filterBarActions/clickClearFilter').clickClearFilter
  this.clickFilterType = require('./filterBarActions/clickFilterType').clickFilterType
  this.isCurrentFilter = require('./filterBarActions/isCurrentFilter').isCurrentFilter

  // Card Actions
  this.clickCardEditButton = require('./cardActions/clickCardEditButton').clickCardEditButton
  this.clickCardDeleteButton = require('./cardActions/clickCardDeleteButton').clickCardDeleteButton

  // Export Actions
  this.clickExport = require('./exportActions/clickExport').clickExport

  // Multiple Choice Actions
  this.clickChoice = require('./multipleChoiceActions/clickChoice').clickChoice

  // Form Actions
  this.clickFormEntryButton = require('./formActions/clickFormEntryButton').clickFormEntryButton

  // Global Search Action
  this.isSearchResults = require('./globalSearchActions/isSearchResults').isSearchResults

  // Table Actions
  this.clickTableCheckbox = require('./tableActions/clickTableCheckbox').clickTableCheckbox
  this.clickExactTableCheckbox = require('./tableActions/clickExactTableCheckbox').clickExactTableCheckbox
  this.clickTableLink = require('./tableActions/clickTableLink').clickTableLink
  this.clickTableButton = require('./tableActions/clickTableButton').clickTableButton
  this.clickTableEnd = require('./tableActions/clickTableEnd').clickTableEnd
  this.isHeader = require('./tableActions/isHeader').isHeader
  this.searchExactInTable = require('./tableActions/searchExactInTable').searchExactInTable
  this.searchInTable = require('./tableActions/searchInTable').searchInTable
  this.searchInTableColumn = require('./tableActions/searchInTableColumn').searchInTableColumn
  this.searchNotInTable = require('./tableActions/searchNotInTable').searchNotInTable
  this.searchNotInTableColumn = require('./tableActions/searchNotInTableColumn').searchNotInTableColumn
  this.searchExactNotInTable = require('./tableActions/searchExactNotInTable').searchExactNotInTable

  // Pagination Actions
  this.createPagination = require('./paginationActions/createPagination').createPagination
  this.clickPageDropdown = require('./paginationActions/clickPageDropdown').clickPageDropdown
  this.clickDropdownOption = require('./paginationActions/clickDropdownOption').clickDropdownOption
  this.clickRowsPerPageDropdown = require('./paginationActions/clickRowsPerPageDropdown').clickRowsPerPageDropdown
  this.clickNotificationDropdown = require('./paginationActions/clickNotificationDropdown').clickNotificationDropdown
  this.clickPageDropdown = require('./paginationActions/clickPageDropdown').clickPageDropdown

  // Pagination Page-Changing Actions
  this.clickFirstPage = require('./paginationActions/clickFirstPage').clickFirstPage
  this.clickPreviousPage = require('./paginationActions/clickPreviousPage').clickPreviousPage
  this.clickNextPage = require('./paginationActions/clickNextPage').clickNextPage
  this.clickLastPage = require('./paginationActions/clickLastPage').clickLastPage

  return this
}

module.exports = {
  actions
}
