/**
 * @name createFiltersBar
 * @author Avery Swank
 * 8/19/2019
 */
'use strict'

const { By } = require('selenium-webdriver')

/**
 * @function createFiltersBar
 * @description This program creates an object of the listed filter elements present on most
 *              tables. All tables that have a filters bar are made up of some combination
 *              of these componnents:
 *              - A Saved Filters Dropdown
 *                  -- A list of the currently Saved Filters
 *                  -- Save Filters Option
 *                  -- Manage Filters Option
 *              - Filter Types Dropdown Options
 *                  -- None Option
 *                  -- Customer Option
 *                  -- Vehicle Option
 *                  -- Etc. More Options
 *              - Filter Results Search Bar
 *              - Clear Filters Button
 *
 *              The point of this is to be used locally as a helper function to other filter bar
 *              action functions
 *
 * @param {MessageBuilder} msg
 *
 * @returns {filtersBar} Filters Bar Object: References to all of the buttons/dropdowns in the Filter Bar
 */
const createFiltersBar = async (msg = {}) => {
  const parent = msg.parent

  // Saved Filters Dropdown
  this.buttonSavedFiltersDropdown = null
  this.buttonSaveFilterOption = null
  this.buttonManageSavedFiltersOption = null

  this.fieldFilterResults = null
  this.buttonClearFilters = null

  // Filter Bar Paths
  const savedFiltersDropdownPath = `[aria-label="core.common.filter.saved_filters"]`
  const saveFilterOptionPath = `[ng-click="$ctrl.saveNewFilter()"]`
  const manageSavedFiltersOptionPath = `[ng-click="$ctrl.manageFilters()"]`

  const fieldFilterPath = `[aria-label="Filter Results"]`
  const clearFiltersPath = `[ng-click="$ctrl.clearChips()"]`

  // Check if there is a Save Filters Dropdown
  try {
    this.buttonSavedFiltersDropdown = await parent.findElement(By.css(savedFiltersDropdownPath))
    this.buttonSaveFilterOption = await parent.findElement(By.css(saveFilterOptionPath))
    this.buttonManageSavedFiltersOption = await parent.findElement(By.css(manageSavedFiltersOptionPath))
  } catch (e) {
    /* ignore */
  }

  // Check if there is a Filter Results Input
  try {
    this.fieldFilterResults = await parent.findElement(By.css(fieldFilterPath))
  } catch (e) {
    /* ignore */
  }

  // Check if there is a Clear Filters Button
  try {
    this.buttonClearFilters = await parent.findElement(By.css(clearFiltersPath))
  } catch (e) {
    /* ignore */
  }

  const filtersBar = {
    savedFiltersDropdown: this.buttonSavedFiltersDropdown,
    savedFiltersDropdownOptions: [this.buttonSaveFilterOption, this.buttonManageSavedFiltersOption],
    fieldFilterResults: this.fieldFilterResults,
    clearFilters: this.buttonClearFilters
  }

  return Object.freeze(filtersBar)
}

module.exports = {
  createFiltersBar
}
