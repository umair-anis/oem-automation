'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

let filterUI = () => {

    this.filter = buildElement(`filter`, `xpath`, `//list-toolbar`)

    // Buttons for Dropdown - Save Filters, Manage Filters
    this.buttonClearFilters = buildElement(`buttonClearFilters`, `css`, `[ng-click="$ctrl.clearChips()"]`)

    this.buttonFiltersDropdown = buildElement(`buttonFiltersDropdown`, `css`, `[aria-label="core.common.filter.saved_filters"]`)
        this.buttonSaveFilter = buildElement(`buttonSaveFilter`, `css`, `[ng-click="$ctrl.saveNewFilter()"]`)
        this.buttonManageSavedFilters = buildElement(`buttonManageSavedFilters`, `css`, `[ng-click="$ctrl.manageFilters()"]`)

    this.fieldFilterName = buildElement(`fieldFilterName`, `css`, `[name="name"]`)
    this.fieldEditFilterName = buildElement(`fieldEditFilterName`, `css`, `[ng-model="filter.filterName"]`)
    this.buttonSave = buildElement(`buttonSave`, `css`, `[aria-label="core.common.form.save"]`)

    // Buttons for Filter Types
    this.buttonFilterType = buildElement(`buttonFilterType`, `xpath`, `//filter-type-menu[@class="desktop-filter-type-menu ng-scope ng-isolate-scope"]/md-menu/button`)
    
    return this
}

module.exports = {
    filterUI
}