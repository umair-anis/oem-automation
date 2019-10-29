'use strict'

let { buildTestFilters } = require('./buildTestFilters')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickTopTenFaults } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickTopTenFaults')

let testTop10FaultsFilters = async (env = {}, credential = '') => {

    const test = await buildTestFilters(env, credential, clickTopTenFaults)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testTop10FaultsFilters
}