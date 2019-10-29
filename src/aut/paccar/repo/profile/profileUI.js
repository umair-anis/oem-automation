'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

/**
 * The UI elements present on the Profile Top-Right corner of the Dashboard
 * @returns UI Object
 */
let profileUI = (() => {

    // Label Ex: "Mike Schmitt-Automation"
    this.userNameLabel = buildElement(`userNameLabel`, `id`, `user-profile-menu-name`)

    // Profile Menu Dropdown Buttons
    this.buttonUserMenu = buildElement(`buttonUserMenu`, `id`, `user-profile-menu-name`)
        this.buttonUserProfile = buildElement(`buttonUserProfile`, `xpath`, `//md-menu-content[1]//div[1]//md-menu-item//a`)
        this.buttonChangeLogs = buildElement(`buttonChangeLogs`, `css`, `[ui-sref="nav.changelogs"]`)
        this.buttonReleaseNotes = buildElement(`buttonReleaseNotes`, `css`, `[href="#/nav/releasenotes"]`)
        this.buttonPrivacyTerms = buildElement(`buttonPrivacyTerms`, `css`, `[href="#/nav/legal"]`)
        this.buttonLogout = buildElement(`buttonLogout`, `css`, `[href="#/logout"]`)
        this.buttonHelp = buildElement(`buttonHelp`, `css`, `[href="#/nav/help"]`)
        this.buttonChangePassword = buildElement(`buttonChangePassword`, `css`, `[href="#/logout"]`)

    // Change Logs - Tabs
    this.buttonNotificationPortal = buildElement(`buttonNotificationPortal`, `xpath`, `//md-pagination-wrapper//md-tab-item[1]`)
    this.buttonOEMPortal = buildElement(`buttonOEMPortal`, `xpath`, `//md-pagination-wrapper//md-tab-item[2]`)
    this.buttonPortalCore = buildElement(`buttonPortalCore`, `xpath`, `//md-pagination-wrapper//md-tab-item[3]`)
    this.buttonSupportal = buildElement(`buttonSupportal`, `xpath`, `//md-pagination-wrapper//md-tab-item[4]`)

    // Release Notes
    this.textReleaseNotes = buildElement(`textReleaseNotes`, `xpath`, `//release-notes//h2`)
    
    // Privacy & terms - Tabs
    this.buttonPrivacy_USCanada = buildElement(`buttonPrivacy_USCanada`, `xpath`, `//md-pagination-wrapper//md-tab-item[1]`)
    this.buttonTerms_USCanada = buildElement(`buttonTerms_USCanada`, `xpath`, `//md-pagination-wrapper//md-tab-item[2]`)
    this.buttonPrivacy_Mexico = buildElement(`buttonPrivacy_Mexico`, `xpath`, `//md-pagination-wrapper//md-tab-item[3]`)
    this.buttonTerms_Mexico = buildElement(`buttonTerms_Mexico`, `xpath`, `//md-pagination-wrapper//md-tab-item[4]`)

    // Help - Links
    this.linkSupport = buildElement(`linkSupport`, `xpath`, `//div[@id="support-link-logo"]/a`)
    this.linkContactPeterbilt = buildElement(`linkContactPeterbilt`, `css`, `[ng-href="mailto:peterbilt.smart.care@paccar.com"]`)
    this.linkContactTruckTech = buildElement(`linkContactTruckTech`, `css`, `[ng-href="mailto:kw.trucktechplus@paccar.com"]`)
    this.linkContactMexico = buildElement(`linkContactMexico`, `css`, `[ng-href="mailto:KW.Tech@paccar.com"]`)


    return this
})

module.exports = {
    profileUI
}