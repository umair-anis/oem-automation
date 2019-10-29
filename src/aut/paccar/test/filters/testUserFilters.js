'use strict'

let { buildTestFilters } = require('./buildTestFilters')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')

let testUserFilters = async (env = {}, credential = '') => {

    const test = await buildTestFilters(env, credential, clickUsers)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testUserFilters
}