'use strict'

let { buildTestFilters } = require('./buildTestFilters')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')

let testVehicleFilters = async (env = {}, credential = '') => {

    const test = await buildTestFilters(env, credential, clickVehicles)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testVehicleFilters
}