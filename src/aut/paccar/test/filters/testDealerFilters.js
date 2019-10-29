'use strict'

let { buildTestFilters } = require('./buildTestFilters')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')

let testDealerFilters = async (env = {}, credential = '') => {

    const test = await buildTestFilters(env, credential, clickDealersServiceCenters)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testDealerFilters
}