'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')
    
/**
 * The UI elements present for Google Analysis
 * @returns UI Object
 */
let googleAnalyticsReportUI = (() => {

    // Headers
    this.header = buildElement(`header`, `xpath`, `//h2`)

    // User Roles Dropdown
    this.dropdownUserRoles = buildElement(`dropdownUserRoles`, `css`, `[role="listbox"]`)
    this.userRoles = ["All Roles", "OEM Administrator", "OEM User", "OEM Power User", "Factory Worker",
                      "Customer Service", "Dealer Owner Admin", "Dealer Owner User", "Dealer Region Admin",
                      "Dealer Region User", "Dealer Administrator", "Dealer Power User", "Dealer Service Technician",
                      "Customer Administrator", "Customer User"]

    // Buttons
    this.buttonExport = buildElement(`buttonExport`, `css`, `[type="submit"]`)

    // Fields
    this.fieldStartDate = buildElement(`fieldStartDate`, `xpath`, `//md-datepicker[@name="startDate"]//input`)
    this.fieldEndDate = buildElement(`fieldEndDate`, `xpath`, `//md-datepicker[@name="endDate"]//input`)

    return this
})
   
module.exports = {
    googleAnalyticsReportUI
}