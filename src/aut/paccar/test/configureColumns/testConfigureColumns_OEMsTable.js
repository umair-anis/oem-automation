'use strict'

let { buildTestConfigureColumns } = require('./buildTestConfigureColumns')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { OrderBuilder } = require('../../data/configureColumns/OrderBuilder')
let { ConfigureColumnsBuilder } = require('../../data/configureColumns/ConfigureColumnsBuilder')
let { oemsUI } = require('../../repo/portalSideNavigation/oems/oemsUI')
let { clickOEMs } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOEMs')

let testConfigureColumns_OEMsTable = async (env = {}, credential = '') => {

    const order1 = await OrderBuilder().setColumnName(`Name`)
                                       .setArrowUp(false)
                                       .setCount(3)
                                       .build()

    const order2 = await OrderBuilder().setColumnName(`Factories`)
                                       .setArrowUp(false)
                                       .build()

    const order3 = await OrderBuilder().setColumnName(`Subscription`)
                                       .setArrowUp(true)
                                       .build()


    const orders = [order1, order2, order3]

    const configCol = await ConfigureColumnsBuilder().setTable(oemsUI().table)
                                                     .setResetHeader( [ `Name`, `Factories`, `Subscription`, `Compl. Warranty` ] )
                                                     .setRemovedHeader( [ `Name`, `Subscription`, `Compl. Warranty` ], `Factories` )
                                                     .setMixupHeader( [ `Subscription`, `Factories`, `Compl. Warranty`, `Name` ], orders )
                                                     .build()

    const test = await buildTestConfigureColumns(env, credential, clickOEMs, configCol)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testConfigureColumns_OEMsTable
}