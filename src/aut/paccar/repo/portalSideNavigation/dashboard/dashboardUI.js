'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements present on the Main Dashboard
 * @returns UI Object
 */
let dashboardUI = async () => {

    // Dashboard Link
    this.dashboardLink = await buildElement(`dashboardLink`, `css`, `[href="#/nav/dashboard"]`)
    
    return this
}

module.exports = {
    dashboardUI
}