'use strict'

let { buildTestConfigureColumns } = require('./buildTestConfigureColumns')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { OrderBuilder } = require('../../data/configureColumns/OrderBuilder')
let { ConfigureColumnsBuilder } = require('../../data/configureColumns/ConfigureColumnsBuilder')
let { dealerServiceCenterUI } = require('../../repo/dealerServiceCenter/dealerServiceCenterUI')
let { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')

let testConfigureColumns_DealersTable = async (env = {}, credential = '') => {

    const order1 = await OrderBuilder().setColumnName(`Contact`)
                                       .setArrowUp(false)
                                       .build()

    const order2 = await OrderBuilder().setColumnName(`Name`)
                                       .setArrowUp(true)
                                       .build()

    const order3 = await OrderBuilder().setColumnName(`Address`)
                                       .setArrowUp(true)
                                       .setCount(2)
                                       .build()

    const orders = [order1, order2, order3]

    const configCol = await ConfigureColumnsBuilder().setTable(dealerServiceCenterUI().table)
                                                     .setResetHeader( [ `Name`, `Code`, `Address`, `Contact` ] )
                                                     .setRemovedHeader( [ `Code`, `Address`, `Contact` ], `Name` )
                                                     .setMixupHeader( [ `Address`, `Name`, `Code`, `Contact` ], orders )
                                                     .build()

    const test = await buildTestConfigureColumns(env, credential, clickDealersServiceCenters, configCol)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testConfigureColumns_DealersTable
}