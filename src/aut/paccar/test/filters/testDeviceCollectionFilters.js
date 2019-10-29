'use strict'

let { buildTestFilters } = require('./buildTestFilters')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')

let testDeviceCollectionFilters = async (env = {}, credential = '') => {

    const test = await buildTestFilters(env, credential, clickDeviceCollection)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testDeviceCollectionFilters
}