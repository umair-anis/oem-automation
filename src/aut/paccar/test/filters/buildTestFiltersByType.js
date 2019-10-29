'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')
let { buildEnterFilters } = require('../../scenario/filter/buildEnterFilters')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let { FilterBuilder } = require('../../data/filters/FilterBuilder')

let buildTestFiltersByType = async (env = {}, credential = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    const filter1 = await FilterBuilder().setName(`testfilter1`)
                                         .setChipFilters([`Justin Test`, `Mom and Pop`])
                                         .setFilterType(`Customers`)
                                         .build()

    const filter2 = await FilterBuilder().setName(`testfilter2`)
                                         .setChipFilters([`The North Westeros`])
                                         .setFilterType(`Dealer Regions`)
                                         .build()

    const filter3 = await FilterBuilder().setName(`testfilter3`)
                                         .setChipFilters([`API`, `Service`])
                                         .setFilterType(`None`)
                                         .build()

    const filters = [filter1, filter2, filter3]

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickCustomersScenario = await clickCustomers()
    const buildEnterFiltersScenario = await buildEnterFilters(filters)
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , clickCustomersScenario
                        , buildEnterFiltersScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Filters by Type - Customers Table`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestFiltersByType
}