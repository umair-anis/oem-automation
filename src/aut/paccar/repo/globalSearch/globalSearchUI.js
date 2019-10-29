'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

/**
 * The UI elements present on the Global Search Bar of the main dashboard
 * @returns UI Object
 */
let globalSearchUI = (() => {

    // Global Search Bar
    this.globalSearchBar = buildElement(`globalSearchBar`, `css`, `[type="search"]`)

    // Search Dropdown Suggestions
    this.firstResult = buildElement(`firstResult`, `xpath`, `//li[1]//md-autocomplete-parent-scope//div`)
    this.secondResult = buildElement(`secondResult`, `xpath`, `//li[2]//md-autocomplete-parent-scope//div`)

    // General Search Entries
    this.entriesSearchResults = buildElement(`entriesSearchResults`, `css`, `[class="search-results-list ng-scope md-default-theme"]`)

    // No Results
    this.textNoSearchResultsFound = buildElement(`textNoSearchResultsFound`, `css`, `[ng-if="!$ctrl.hasResults"]`)
    
    return this
})

module.exports = {
    globalSearchUI
}