'use strict'

let { buildTestTablePagination } = require('./buildTestTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')

let testDOGPagination = async (env = {}, credential = '') => {

    const test = await buildTestTablePagination(env, credential, clickDOG)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testDOGPagination
}