'use strict'

let { buildTestTablePagination } = require('./buildTestTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickSubscriptions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickSubscriptions')

let testSubscriptionPagination = async (env = {}, credential = '') => {

    const test = await buildTestTablePagination(env, credential, clickSubscriptions)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testSubscriptionPagination
}