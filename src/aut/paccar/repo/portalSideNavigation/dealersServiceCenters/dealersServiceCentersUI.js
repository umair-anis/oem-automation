'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present on the Dealer Service Centers Page
 * @returns UI Object
 */
let dealersServiceCentersUI = (() => {

    // Headers
    this.header = buildElement(`header`, `xpath`, `//div[@class="breadcrumb"]//li[2]//span`)
    
    return this
})

module.exports = {
    dealersServiceCentersUI
}