'use strict'

let { buildTestTablePagination } = require('./buildTestTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')

let testVehiclePagination = async (env = {}, credential = '') => {

    const test = await buildTestTablePagination(env, credential, clickVehicles)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testVehiclePagination
}