'use strict'

let { buildTestTablePagination } = require('./buildTestTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')

let testDealerPagination = async (env = {}, credential = '') => {

    const test = await buildTestTablePagination(env, credential, clickDealersServiceCenters, [`150`, `100`, `50`])
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testDealerPagination
}