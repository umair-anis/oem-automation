'use strict'

let { buildTestConfigureColumns } = require('./buildTestConfigureColumns')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { OrderBuilder } = require('../../data/configureColumns/OrderBuilder')
let { ConfigureColumnsBuilder } = require('../../data/configureColumns/ConfigureColumnsBuilder')
let { otaUI } = require('../../repo/ota/otaUI')
let { clickOTASubscriptions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOTASubscriptions')

let testConfigureColumns_OTASubscriptionsTable = async (env = {}, credential ='') => {

    const order1 = await OrderBuilder().setColumnName(`VIN`)
                                       .setArrowUp(false)
                                       .setCount(4)
                                       .build()

    const order2 = await OrderBuilder().setColumnName(`OTA Subscription Status`)
                                       .setArrowUp(true)
                                       .setCount(4)
                                       .build()

    const order3 = await OrderBuilder().setColumnName(`Customer`)
                                       .setArrowUp(true)
                                       .build()

    const orders = [order1, order2, order3]

    const configCol = await ConfigureColumnsBuilder().setTable(otaUI().table)
                                                     .setResetHeader( [ `Customer`, `VIN`, `Make`, `Year`, `Model`, `Unit Number`, `OTA Subscription Status`] )
                                                     .setRemovedHeader( [ `Customer`, `VIN`, `Make`, `Year`, `Model`, `Unit Number`], `OTA Subscription Status` )
                                                     .setMixupHeader( [ `Customer`, `Make`, `OTA Subscription Status`, `Year`, `Model`, `Unit Number`, `VIN`], orders )
                                                     .build()

    const test = await buildTestConfigureColumns(env, credential, clickOTASubscriptions, configCol)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testConfigureColumns_OTASubscriptionsTable
}