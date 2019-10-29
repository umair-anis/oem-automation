'use strict'

let { buildTestFilters } = require('./buildTestFilters')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickOEMs } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOEMs')

let testOEMFilters = async (env = {}, credential = '') => {

    const test = await buildTestFilters(env, credential, clickOEMs)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testOEMFilters
}