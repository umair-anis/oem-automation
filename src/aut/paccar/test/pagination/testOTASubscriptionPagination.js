'use strict'

let { buildTestTablePagination } = require('./buildTestTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickOTASubscriptions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOTASubscriptions')

let testOTASubscriptionPagination = async (env = {}, credential = '') => {

    const test = await buildTestTablePagination(env, credential, clickOTASubscriptions)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testOTASubscriptionPagination
}