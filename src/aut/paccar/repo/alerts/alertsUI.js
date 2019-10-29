'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements present for Alerts or Page Alerts or Toast Alerts
 * @returns UI Object
 */
let alertsUI =  (() => {

    // General Toast Alert
    this.toastAlert =  buildElement(`toastAlert`, `css`, `[role="alert"]`)

    // Chip Filter Alerts
    this.notAllPersistentChipsAppliedMessage =  buildElements(`notAllPersistentChipsAppliedMessage`, `xpath`, `//div[contains(@class, 'persistent-message')]`)

    // Table Search Bar Alerts
    this.persistentMessage =  buildElement(`persistentMessage`, `xpath`, `//div[@class="persistent-message ng-binding ng-scope"]`)

    // Device Collection Alerts
    this.nameIsRequiredErrorMessage =  buildElement(`nameIsRequiredErrorMessage`, `css`, `[for="$ctrl.form.name.$error"]`)

    // Google Analytics Alerts
    this.errorMessageStartDate =  buildElement(`errorMessageStartDate`, `xpath`, `//ng-message[@when = 'maxdate']`)
    this.errorMessageEndtDate =  buildElement(`errorMessageEndtDate`, `xpath`, `//ng-message[@when = 'mindate']`)
    this.errorMessagesRequired =  buildElements(`errorMessagesRequired`, `xpath`, `//ng-message[@when = 'required']`)

    return this
})

module.exports = {
    alertsUI
}