'use strict'

const { callSpecs } = require('../../../../core/spec/callSpecs')
const { SpecBuilder } = require('../../../../core/spec/SpecBuilder')

let { testSideLink } = require('../../test/negative/testSideLink')
let { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')
let { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')
let { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')
let { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')
let { clickSubscriptions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickSubscriptions')
let { clickOTASubscriptions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOTASubscriptions')
let { clickNotifications } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickNotifications')
let { clickAnalytics } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickAnalytics')
let { clickTopTenFaults } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickTopTenFaults')
let { clickDataExport } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDataExport')
let { clickDataImport } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDataImport')
let { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')
let { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')
let { clickGoogleAnalytics } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickGoogleAnalytics')
let { clickManufacturers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickManufacturers')
let { clickOEMs } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOEMs')
let { clickPermissions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickPermissions')
let { clickRemoteDiagnostics } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickRemoteDiagnostics')
let { clickRoles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickRoles')
let { clickTIDEmailTemplate } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickTIDEmailTemplate')
let { clickBlacklist } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickBlacklist')
let { clickDiagnosticAssistant } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDiagnosticAssistant')

describe(`Side Navigation Links`, () => {

    const specDOG = SpecBuilder().setPortal(`Paccar Portal`)
                                 .setPortalType(`Staging`)
                                 .setName(`Side Navigation Links - Dealer Owner Group`)
                                 .setTestFunc(testSideLink)
                                 .setPassingData([ clickDOG ])
                                 .setFailingRoles( [`cumminsuser`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                 .build()

    const specDealers = SpecBuilder().setPortal(`Paccar Portal`)
                                     .setPortalType(`Staging`)
                                     .setName(`Side Navigation Links - Dealers / Service Centers`)
                                     .setTestFunc(testSideLink)
                                     .setPassingData([ clickDealersServiceCenters ])
                                     .setFailingRoles( [`cumminsuser`, `factoryworker`] )
                                     .build()

    const specCustomers = SpecBuilder().setPortal(`Paccar Portal`)
                                       .setPortalType(`Staging`)
                                       .setName(`Side Navigation Links - Customers`)
                                       .setTestFunc(testSideLink)
                                       .setPassingData([ clickCustomers ])
                                       .setFailingRoles( [`cumminsuser`, `factoryworker`] )
                                       .build()

    const specUsers = SpecBuilder().setPortal(`Paccar Portal`)
                                   .setPortalType(`Staging`)
                                   .setName(`Side Navigation Links - Users`)
                                   .setTestFunc(testSideLink)
                                   .setPassingData([ clickUsers ])
                                   .setFailingRoles( [`cumminsuser`, `factoryworker`] )
                                   .build()

    const specSubscriptions = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Side Navigation Links - Subscriptions`)
                                            .setTestFunc(testSideLink)
                                            .setPassingData([ clickSubscriptions ])
                                            .setFailingRoles( [`paccaruser`, `paccarpoweruser`, `divisionuser`, `divisionuser1`, `dealerowneruser`, `dealerpoweruser`, `dealerregionuser`, `dealeruser`, `dealertech`, `cumminsuser`, `factoryworker`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                            .build()

    const specOTASubs = SpecBuilder().setPortal(`Paccar Portal`)
                                      .setPortalType(`Staging`)
                                      .setName(`Side Navigation Links - OTA Subscriptions`)
                                      .setTestFunc(testSideLink)
                                      .setPassingData([ clickOTASubscriptions ])
                                      .setFailingRoles( [`paccaruser`, `paccarpoweruser`, `divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, 
                                                         `dealertech`, `cumminsuser`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                      .build()

    const specNotifications = SpecBuilder().setPortal(`Paccar Portal`)
                                            .setPortalType(`Staging`)
                                            .setName(`Side Navigation Links - Notifications`)
                                            .setTestFunc(testSideLink)
                                            .setPassingData([ clickNotifications ])
                                            .setFailingRoles( [`cumminsuser`] )
                                            .build()

    const specAnalytics = SpecBuilder().setPortal(`Paccar Portal`)
                                       .setPortalType(`Staging`)
                                       .setName(`Side Navigation Links - Analytics`)
                                       .setTestFunc(testSideLink)
                                       .setPassingData([ clickAnalytics ])
                                       .setFailingRoles( [`divisionuser`, `divisionuser1`, `dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, `dealertech`,
                                                          `cumminsuser`, `factoryworker`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                       .build()

    const specTopTenFaults = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Top 10 Faults`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickTopTenFaults ])
                                          .setFailingRoles( [`dealerowneradmin`, `dealerowneruser`, `dealerpoweruser`, `dealerregionadmin`, `dealerregionuser`, `dealeradmin`, `dealeruser`, `dealertech`, `cumminsuser`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specDataExport = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Data Export`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickDataExport ])
                                          .setFailingRoles( [`kenmexpaccaradmin`, `kenmexsuperadmin`, `spanishUser`, `cumminsuser`] )
                                          .build()

    const specDataImport = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Data Import`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickDataImport ])
                                          .setFailingRoles( [`paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `kenmexpaccaradmin`, `kenmexsuperadmin`, `spanishUser`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specDeviceCollection = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Device Collection`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickDeviceCollection ])
                                          .setFailingRoles( [`paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `kenmexpaccaradmin`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specDevices = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Devices`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickDevices ])
                                          .setFailingRoles( [`paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `kenmexpaccaradmin`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specGoogleReport = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Google Analytics Report`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickGoogleAnalytics ])
                                          .setFailingRoles( [`paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specManufacturer = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Manufacturers`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickManufacturers ])
                                          .setFailingRoles( [`paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `kenmexpaccaradmin`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()
                                          
    const specOEMs = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - OEMs`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickOEMs ])
                                          .setFailingRoles( [`paccaradmin`, `paccarpoweruser`, `kenmexsuperadmin`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `kenmexpaccaradmin`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specPermissions = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Permissions`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickPermissions ])
                                          .setFailingRoles( [`peoplenetadmin`, `spanishUser`, `paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `kenmexpaccaradmin`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specRemoteDiag = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Remote Diagnostics`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickRemoteDiagnostics ])
                                          .setFailingRoles( [`paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `kenmexpaccaradmin`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specRoles = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Roles`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickRoles ])
                                          .setFailingRoles( [`paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `kenmexpaccaradmin`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specTIDEmailTemp = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - TID Email Template`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickTIDEmailTemplate ])
                                          .setFailingRoles( [`paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `kenmexpaccaradmin`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specBlacklist = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Blacklist`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickBlacklist ])
                                          .setFailingRoles( [`paccaradmin`, `paccarpoweruser`, `dealerowneradmin`, `dealerregionadmin`, `dealeradmin`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `paccaruser`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `kenmexpaccaradmin`, `cumminsuser`, `dealeruser`, `dealertech`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()

    const specDiagAssistant = SpecBuilder().setPortal(`Paccar Portal`)
                                          .setPortalType(`Staging`)
                                          .setName(`Side Navigation Links - Diagnostic Assistant`)
                                          .setTestFunc(testSideLink)
                                          .setPassingData([ clickDiagnosticAssistant ])
                                          .setFailingRoles( [`paccarpoweruser`, `customeradmin`, `customeradmincummins`, `preferredcustomeradmin`, `divisionuser`, `divisionuser1`, `factoryworker`, `dealerowneruser`, `dealerregionuser`,
                                                             `dealerpoweruser`, `cumminsuser`, `dealeruser`, `cumminsuser`, `preferredcustomeruser`, `customeruser`, `customerusercummins`] )
                                          .build()
                                          
    callSpecs(specDOG)
    callSpecs(specDealers)
    callSpecs(specCustomers)
    callSpecs(specUsers)
    callSpecs(specSubscriptions)
    callSpecs(specOTASubs)
    callSpecs(specNotifications)
    callSpecs(specAnalytics)
    callSpecs(specTopTenFaults)
    callSpecs(specDataExport)
    callSpecs(specDataImport)
    callSpecs(specDeviceCollection)
    callSpecs(specDevices)
    callSpecs(specGoogleReport)
    callSpecs(specManufacturer)
    callSpecs(specOEMs)
    callSpecs(specPermissions)
    callSpecs(specRemoteDiag)
    callSpecs(specRoles)
    callSpecs(specTIDEmailTemp)
    callSpecs(specBlacklist)
    callSpecs(specDiagAssistant)
})
