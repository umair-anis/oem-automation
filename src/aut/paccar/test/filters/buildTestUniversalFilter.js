'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')
let { buildEnterFilters } = require('../../scenario/filter/buildEnterFilters')
let { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')
let { isUserFilter } = require('../../scenario/users/isUserFilter')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let { FilterBuilder } = require('../../data/filters/FilterBuilder')

let buildTestUniversalFilter = async (env = {}, credential = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    const universalFilter = [`Justin Test`]
    const filter1 = await FilterBuilder().setName(`testfilter1`)
                                         .setChipFilters(universalFilter)
                                         .setFilterType(`Customers`)
                                         .build()

    const filters = [filter1]

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickCustomersScenario = await clickCustomers()
    const buildEnterFiltersScenario = await buildEnterFilters(filters)
    const clickUsersScenario = await clickUsers()
    const isUserFilterScenario = await isUserFilter(universalFilter)
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        //, clickCustomersScenario
                        , buildEnterFiltersScenario
                        , clickUsersScenario
                        , isUserFilterScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Filters by Type - A Universal Filter (Customer) is on both the Customers and Vehicles Table`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestUniversalFilter
}