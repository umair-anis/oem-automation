'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickOTASubscriptions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOTASubscriptions')
let { searchOTASubscriptionTable } = require('../../scenario/ota/searchOTASubscriptionTable')
let { clickOTASubscriptionLink } = require('../../scenario/ota/clickOTASubscriptionLink')
let { validateCurrentBreadcrumb } = require('../../scenario/breadcrumb/validateCurrentBreadcrumb')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let buildTestLinkToDetails = async (env = {}, credential = '', search = [], link = [], breadcrumb = []) => {

    const browsers = await readBrowsers()
    const envName = env.name

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickOTASubscriptionsScenario = await clickOTASubscriptions()
    const searchOTASubscriptionTableScenario = await searchOTASubscriptionTable(search)
    const clickOTASubscriptionLinkScenario = await clickOTASubscriptionLink(link)
    const validateCurrentBreadcrumbScenario = await validateCurrentBreadcrumb(breadcrumb.crumbs)
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , clickOTASubscriptionsScenario
                        , searchOTASubscriptionTableScenario
                        , clickOTASubscriptionLinkScenario
                        , validateCurrentBreadcrumbScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing OTA - Click OTA Sub Link: ${search} leads to breadcrumb: ${breadcrumb.crumbs}`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestLinkToDetails
}