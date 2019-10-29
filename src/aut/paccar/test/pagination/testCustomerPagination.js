'use strict'

let { buildTestTablePagination } = require('./buildTestTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')

let testCustomerPagination = async (env = {}, credential = '') => {

    const test = await buildTestTablePagination(env, credential, clickCustomers)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testCustomerPagination
}