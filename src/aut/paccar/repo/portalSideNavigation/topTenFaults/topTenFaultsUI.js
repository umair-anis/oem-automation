'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

let topTenFaultsUI = (() => {

    // Headers
    this.header = buildElement(`header`, `xpath`, `//div[@class="breadcrumb"]//li[2]//span`)
    
    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="main-content"]/top-faults/div/md-card/list-table/md-table-container/table`)

    return this
})

module.exports = {
    topTenFaultsUI
}