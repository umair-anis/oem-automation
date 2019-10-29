'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

/**
 * The UI elements present on the Side Navigation section of the main dashboard
 * @returns UI Object
 */
let portalSideNavigationUI = (() => {

    // Main Dashboard
    this.fleetHealthMapLink = buildElement(`fleetHealthMapLink`, `css`, `[href="#/nav/dashboard"]`)

    // OTA
    this.permissionsLink = buildElement(`permissionsLink`, `css`, `ng-href="#/nav/permission/list/"`)

    // PeopleNet, Paccar, Dealer, DOG, Customer, etc.
    this.analyticsLink = buildElement(`analyticsLink`, `css`, `[href="#/nav/analytics"]`)
    this.dealerOwnerGroupsLink = buildElement(`dealerOwnerGroupsLink`, `css`, `[href="#/nav/dealerOwnerGroup/list/"]`)
    this.dealersLink = buildElement(`dealersLink`, `css`, `[href="#/nav/dealer/list/"]`)
    this.customersLink = buildElement(`customersLink`, `css`, `[href="#/nav/customer/list/"]`)
    this.usersLink = buildElement(`usersLink`,  `css`, `[href="#/nav/user/list/"]`);
    this.vehiclesLink = buildElement(`vehiclesLink`, `css`, `[href="#/nav/vehicle/list/"]`)
    this.subscriptionsLink = buildElement(`subscriptionsLink`,  `css`, `[href="#/nav/subscription/list/"]`);
    this.otaSubscriptionLink = buildElement(`otaSubscriptionLink`, `css`, `[href="#/nav/otaSubscription/list/"]`)
    this.notificationsLink = buildElement(`notificationsLink`, `css`, `[href="#/nav/ttm-notification/list/"]`)
    this.topTenFaultsLink = buildElement(`topTenFaultsLink`, `css`, `[href="#/nav/topten"]`)
    this.dataExportLink = buildElement(`exportLink`, `css`, `[aria-label = "Data Export"]`)
    this.dataImportLink = buildElement(`importLink`, `css`, `[aria-label = "Data Import"]`)
    this.deviceCollectionsLink = buildElement(`deviceCollectionsLink`, `css`, `[href="#/nav/deviceCollection/list/"]`)
    this.devicesLink = buildElement(`devicesLink`, `css`, `[href="#/nav/device/list/"]`)
    this.googleAnalyticsLink = buildElement(`googleAnalyticsLink`, `css`, `[href="#/nav/analytics/google"]`)
    this.fleetReportLink = buildElement(`fleetReportLink`, `css`, `[href="#/nav/fleetReport"]`)
    this.manufacturersLink = buildElement(`manufacturersLink`, `css`, `[href="#/nav/manufacturer/list/"]`)
    this.oemsLink = buildElement(`oemsLink`, `css`, `[href="#/nav/oem/list/"]`)
    this.permissionsLink = buildElement(`permissionsLink`, `css`, `[href="#/nav/permission/list/"]`)
    this.remoteDiagLink = buildElement(`remoteDiagLink`, `css`, `[href="#/nav/remoteDiagnostics/deactivate/"]`)
    this.rolesLink = buildElement(`rolesLink`, `css`, `[href="#/nav/role/list/"]`)
    this.tidEmailTemplateLink = buildElement(`tidEmailTemplateLink`, `css`, `[href="#/nav/tidEmailTemplates/update"]`)
    this.blacklistLink = buildElement(`blacklistLink`, `css`, `[href="#/nav/blacklist/list/"]`)
    this.diagAssistantLink = buildElement(`diagAssistantLink`, `css`, `[href="https://datav.paccar.com/da/"]`)

    return this
})

module.exports = {
    portalSideNavigationUI
}