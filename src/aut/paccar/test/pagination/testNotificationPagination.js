'use strict'

let { buildTestNotificationTablePagination } = require('./buildTestNotificationTablePagination')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { clickNotifications } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickNotifications')

let testNotificationPagination = async (env = {}, credential = '') => {

    const test = await buildTestNotificationTablePagination(env, credential, clickNotifications)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testNotificationPagination
}