'use strict'

let { buildTestTablePagination } = require('./buildTestTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')

let testUserPagination = async (env = {}, credential = '') => {

    const test = await buildTestTablePagination(env, credential, clickUsers)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testUserPagination
}