'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present for Fleet Report
 * @returns UI Object
 */
let fleetReportUI = (() => {

    this.loadingContainer = buildElement(`loadingContainer`, `id`, `loading-container`)

    // Tables
    this.tableTop5 = buildElement(`tableTop5`, `xpath`, `//md-card-content/div/div[1]//table`)
    this.tableBottom5 = buildElement(`tableBottom5`, `xpath`, `//md-card-content/div/div[2]//table`)

    // Graphs
    this.graphFuelEconomy = buildElement(`graphFuelEconomy`, `xpath`, `//*[local-name()='svg'][@class="vehicle-performance-fuelEconomy"]`)
    this.graphPercentIdle = buildElement(`graphPercentIdle`, `xpath`, `//*[local-name()='svg'][@class="vehicle-performance-percentIdle"]`)

    // Dropdowns
    this.dropdownEngineFamily = buildElement(`dropdownEngineFamily`, `css`, `[ng-model="$ctrl.currentState['family']"]`)
    this.dropdownEngineModelYear = buildElement(`dropdownEngineModelYear`, `css`, `[ng-model="$ctrl.currentState['modelYear']"]`)
    this.dropdownDuration = buildElement(`dropdownDuration`, `css`, `[ng-model="$ctrl.currentState['range']"]`)
    this.dropdownSortBy = buildElement(`dropdownSortBy`, `css`, `[ng-model="$ctrl.currentVehicleSortField"]`)
    
    // Buttons
    this.buttonPrint = buildElement(`buttonPrint`, `css`, `[ng-click="$ctrl.print()"]`)
    this.buttonRun = buildElement(`buttonRun`, `css`, `[ng-click="$ctrl.getData()"]`)

    // Date Picker
    this.fieldStartDate = buildElement(`fieldStartDate`, `xpath`, "(//input[@aria-label = 'YYYY-MM-DD'])[1]")
    this.fieldEndDate = buildElement(`fieldEndDate`, `xpath`, "(//input[@aria-label = 'YYYY-MM-DD'])[2]")

    return this
})

module.exports = {
    fleetReportUI
}