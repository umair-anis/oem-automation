'use strict'

let { buildTestConfigureColumns } = require('./buildTestConfigureColumns')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { OrderBuilder } = require('../../data/configureColumns/OrderBuilder')
let { ConfigureColumnsBuilder } = require('../../data/configureColumns/ConfigureColumnsBuilder')
let { customersUI } = require('../../repo/portalSideNavigation/customers/customersUI')
let { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')

let testConfigureColumns_CustomersTable = async (env = {}, credential = '') => {

    const order1 = await OrderBuilder().setColumnName(`Address`)
                                       .setArrowUp(true)
                                       .build()

    const order2 = await OrderBuilder().setColumnName(`Name`)
                                       .setArrowUp(false)
                                       .build()

    const order3 = await OrderBuilder().setColumnName(`Email`)
                                       .setArrowUp(false)
                                       .setCount(3)
                                       .build()

    const orders = [order1, order2, order3]

    const configCol = await ConfigureColumnsBuilder().setTable(customersUI().table)
                                                     .setResetHeader( [ `Name`, `Address`, `Phone`, `Email` ] )
                                                     .setRemovedHeader( [ `Name`, `Phone`, `Email` ], `Address` )
                                                     .setMixupHeader( [ `Address`, `Phone`, `Name`, `Email` ], orders )
                                                     .build()

    const test = await buildTestConfigureColumns(env, credential, clickCustomers, configCol)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testConfigureColumns_CustomersTable
}