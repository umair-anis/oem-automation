'use strict'

let { buildTestFilters } = require('./buildTestFilters')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickRoles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickRoles')

let testRolesFilters = async (env = {}, credential = '') => {

    const test = await buildTestFilters(env, credential, clickRoles)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testRolesFilters
}