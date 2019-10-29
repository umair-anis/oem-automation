'use strict'

let { buildTestFilters } = require('./buildTestFilters')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickOTASubscriptions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOTASubscriptions')

let testOTASubscriptionFilters = async (env = {}, credential = '') => {

    const test = await buildTestFilters(env, credential, clickOTASubscriptions)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testOTASubscriptionFilters
}