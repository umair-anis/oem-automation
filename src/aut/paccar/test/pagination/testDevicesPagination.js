'use strict'

let { buildTestDeviceTablePagination } = require('./buildTestDeviceTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')

let testDevicesPagination = async (env = {}, credential = '') => {

    const test = await buildTestDeviceTablePagination(env, credential, clickDevices, [`150`, `100`, `50`])
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testDevicesPagination
}