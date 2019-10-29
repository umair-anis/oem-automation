'use strict'

let { buildTestTablePagination } = require('./buildTestTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickRemoteDiagnostics } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickRemoteDiagnostics')

let testRemoteDiagnosticsPagination = async (env = {}, credential = '') => {

    const test = await buildTestTablePagination(env, credential, clickRemoteDiagnostics)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testRemoteDiagnosticsPagination
}