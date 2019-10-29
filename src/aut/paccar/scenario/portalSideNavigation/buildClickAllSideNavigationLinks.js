'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickAnalytics } = require('./sideNavigationLinks/clickAnalytics')
let { clickBlacklist } = require('./sideNavigationLinks/clickBlacklist')
let { clickCustomers } = require('./sideNavigationLinks/clickCustomers')
let { clickDOG } = require('./sideNavigationLinks/clickDOG')
let { clickDashboard } = require('./sideNavigationLinks/clickDashboard')
let { clickDataExport } = require('./sideNavigationLinks/clickDataExport')
let { clickDataImport } = require('./sideNavigationLinks/clickDataImport')
let { clickDealersServiceCenters } = require('./sideNavigationLinks/clickDealersServiceCenters')
let { clickDeviceCollection } = require('./sideNavigationLinks/clickDeviceCollection')
let { clickDevices } = require('./sideNavigationLinks/clickDevices')
let { clickDiagnosticAssistant } = require('./sideNavigationLinks/clickDiagnosticAssistant')
let { clickGoogleAnalytics } = require('./sideNavigationLinks/clickGoogleAnalytics')
let { clickManufacturers } = require('./sideNavigationLinks/clickManufacturers')
let { clickNotifications } = require('./sideNavigationLinks/clickNotifications')
let { clickOEMs } = require('./sideNavigationLinks/clickOEMs')
let { clickOTASubscriptions } = require('./sideNavigationLinks/clickOTASubscriptions')
let { clickRemoteDiagnostics } = require('./sideNavigationLinks/clickRemoteDiagnostics')
let { clickRoles } = require('./sideNavigationLinks/clickRoles')
let { clickSubscriptions } = require('./sideNavigationLinks/clickSubscriptions')
let { clickTIDEmailTemplate } = require('./sideNavigationLinks/clickTIDEmailTemplate')
let { clickTopTenFaults } = require('./sideNavigationLinks/clickTopTenFaults')
let { clickUsers } = require('./sideNavigationLinks/clickUsers')
let { clickVehicles } = require('./sideNavigationLinks/clickVehicles')

/**
 * Build a scenario for clicking the Side Navigation Links
 * @returns Scenario
 */
let buildClickAllSideNavigationLinks = async () => {

    let steps = []

    const clickAnalyticsScenario = await clickAnalytics()
    const clickBlacklistScenario = await clickBlacklist()
    const clickCustomersScenario = await clickCustomers()
    const clickDOGScenario = await clickDOG()
    const clickDashboardScenario = await clickDashboard()
    const clickDataExportScenario = await clickDataExport()
    const clickDataImportScenario = await clickDataImport()
    const clickDealersServiceCentersScenario = await clickDealersServiceCenters()
    const clickDeviceCollectionScenario = await clickDeviceCollection()
    const clickDevicesScenario = await clickDevices()
    const clickDiagnosticAssistantScenario = await clickDiagnosticAssistant()
    const clickGoogleAnalyticsScenario = await clickGoogleAnalytics()
    const clickManufacturersScenario = await clickManufacturers()
    const clickNotificationsScenario = await clickNotifications()
    const clickOEMsScenario = await clickOEMs()
    const clickOTASubscriptionsScenario = await clickOTASubscriptions()
    const clickRemoteDiagnosticsScenario = await clickRemoteDiagnostics()
    const clickRolesScenario = await clickRoles()
    const clickSubscriptionsScenario = await clickSubscriptions()
    const clickTIDEmailTemplateScenario = await clickTIDEmailTemplate()
    const clickTopTenFaultsScenario = await clickTopTenFaults()
    const clickUsersScenario = await clickUsers()
    const clickVehiclesScenario = await clickVehicles()

    const scenarios = [   clickAnalyticsScenario
                        , clickBlacklistScenario
                        , clickCustomersScenario
                        , clickDOGScenario
                        , clickDashboardScenario
                        , clickDataExportScenario
                        , clickDataImportScenario
                        , clickDealersServiceCentersScenario
                        , clickDeviceCollectionScenario
                        , clickDevicesScenario
                        , clickGoogleAnalyticsScenario
                        , clickManufacturersScenario
                        , clickNotificationsScenario
                        , clickOEMsScenario
                        , clickOTASubscriptionsScenario
                        , clickRemoteDiagnosticsScenario
                        , clickRolesScenario
                        , clickSubscriptionsScenario
                        , clickTIDEmailTemplateScenario
                        , clickTopTenFaultsScenario
                        , clickUsersScenario
                        , clickVehiclesScenario ]

    steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName('Click All Side Navigation Links')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildClickAllSideNavigationLinks
}