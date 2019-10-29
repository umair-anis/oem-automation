'use strict'

let { buildTestDeviceTablePagination } = require('./buildTestDeviceTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')

let testDeviceCollectionPagination = async (env = {}, credential = '') => {

    const test = await buildTestDeviceTablePagination(env, credential, clickDeviceCollection, [`50`, `25`, `10`])
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testDeviceCollectionPagination
}