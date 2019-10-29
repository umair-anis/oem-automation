'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

/**
 * The UI elements present for OTA Super Admin
 * @returns UI Object
 */
let otaUI = (() => {

    // Titles
    this.titleDashboard = buildElement(`titleDashboard`, `css`, `[ng-bind="$ctrl.title"]`)

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="ota-subscription-list-table"]/md-card/list-table/md-table-container/table`)

    // Filters
    this.filter = buildElement(`filter`, `xpath`, `//*[@id="ota-subscription-list-table"]/md-card/list-toolbar`)

    // Sliders
    this.sliderHealthSoftware = buildElement(`sliderHealthSoftware`, `css`, `[name="health_software"]`)

    return this
})

module.exports = {
    otaUI
}