'use strict'

let { buildTestFilters } = require('./buildTestFilters')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')

let testDeviceFilters = async (env = {}, credential = '') => {

    const test = await buildTestFilters(env, credential, clickDevices)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testDeviceFilters
}