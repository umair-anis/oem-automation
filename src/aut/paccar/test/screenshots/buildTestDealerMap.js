'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')
let { clickDealerLink } = require('../../scenario/dealerServiceCenter/clickDealerLink')
let { scrollToGeofenceMap } = require('../../scenario/dealerServiceCenter/scrollToGeofenceMap')
let { takeElementScreenshot } = require('../../scenario/screenshot/takeElementScreenshot')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let { dealerServiceCenterUI } = require('../../repo/dealerServiceCenter/dealerServiceCenterUI')
let { ScreenshotBuilder } = require('../../data/screenshot/ScreenshotBuilder')

let buildTestDealerMap = async (env = {}, credential = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    const dealer = [`AMG Peterbilt of Columbus, LLC`]

    const geofenceMapScreenshot = await ScreenshotBuilder().setName(`Geofence Map Screenshot`)
                                                           .setFileName(`geofenceMap/png`)
                                                           .setFileType(`png`)
                                                           .setEncodingType(`base64`)
                                                           .setSize(480)
                                                           .setComparingToBaseline(true)
                                                           .setBaselinePath(`src/aut/paccar/screenshots/dealer/dealer_amg_peterbilt_columbus.png`)
                                                           .setSimilarity(50)
                                                           .build()

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickDealersServiceCentersScenario = await clickDealersServiceCenters()
    const clickDealerLinkScenario = await clickDealerLink(dealer)
    const scrollToGeofenceMapScenario = await scrollToGeofenceMap()
    const takeElementScreenshotScenario = await takeElementScreenshot(dealerServiceCenterUI().mapGeofences, geofenceMapScreenshot)
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , clickDealersServiceCentersScenario
                        , clickDealerLinkScenario
                        , scrollToGeofenceMapScenario
                        , takeElementScreenshotScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Screenshot of Dealer Details: ${dealer}`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestDealerMap
}