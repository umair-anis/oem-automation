'use strict'

let { buildTestFilters } = require('./buildTestFilters')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')

let testCustomersFilters = async (env = {}, credential = '') => {

    const test = await buildTestFilters(env, credential, clickCustomers)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testCustomersFilters
}