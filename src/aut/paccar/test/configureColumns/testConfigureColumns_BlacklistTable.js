'use strict'

let { buildTestConfigureColumns } = require('./buildTestConfigureColumns')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { OrderBuilder } = require('../../data/configureColumns/OrderBuilder')
let { ConfigureColumnsBuilder } = require('../../data/configureColumns/ConfigureColumnsBuilder')
let { blacklistUI } = require('../../repo/portalSideNavigation/blacklist/blacklistUI')
let { clickBlacklist } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickBlacklist')

let testConfigureColumns_BlacklistTable = async (env = {}, credential = '') => {

    const order1 = await OrderBuilder().setColumnName(`Create Date`)
                                       .setArrowUp(true)
                                       .setCount(3)
                                       .build()

    const order2 = await OrderBuilder().setColumnName(`Reason`)
                                       .setArrowUp(true)
                                       .build()

    const order3 = await OrderBuilder().setColumnName(`Destination`)
                                       .setArrowUp(false)
                                       .setCount(2)
                                       .build()


    const orders = [order1, order2, order3]

    const configCol = await ConfigureColumnsBuilder().setTable(blacklistUI().table)
                                                     .setResetHeader( [ `Destination`, `Create Date`, `Reason` ] )
                                                     .setRemovedHeader( [ `Destination`, `Reason` ], `Create Date` )
                                                     .setMixupHeader( [ `Create Date`, `Reason`, `Destination` ], orders )
                                                     .build()

    const test = await buildTestConfigureColumns(env, credential, clickBlacklist, configCol)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testConfigureColumns_BlacklistTable
}