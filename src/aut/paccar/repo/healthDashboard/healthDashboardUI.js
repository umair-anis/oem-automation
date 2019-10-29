'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

/**
 * The UI elements present on the Main Dashboard across all Side Navigation Tabs
 * @returns UI Object
 */
let healthDashboardUI = (() => {

    // Sliders
    this.healthSoftwareSlider = buildElement(`healthSoftwareSlider`, `css`, `[name="health_software"]`)
    
    return this
})

module.exports = {
    healthDashboardUI
}