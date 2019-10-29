'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')


/**
 * The UI elements present for notifications page
 * @returns UI Object
 */
let notificationsUI = (() => {

    this.cardContent = buildElement(`cardConent`, `xpath`, `//div[1]/ttm-notification-card/md-card`)

    // Tabs
    this.tabHTML = buildElement(`tabHTML`, `xpath`, `//md-tab-item[1]`)
    this.tabJSON = buildElement(`tabJSON`, `xpath`, `//md-tab-item[2]`)

    // HTML
    this.messegeSent = buildElement(`messegeSent`, `css`, `[class="card-header"]`)

    // JSON 
    this.codeJSON = buildElement(`codeJSON`, `xpath`, `//code`)

    
    return this
})

module.exports = {
    notificationsUI
}