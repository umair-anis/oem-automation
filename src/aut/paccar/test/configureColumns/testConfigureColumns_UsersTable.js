'use strict'

let { buildTestConfigureColumns } = require('./buildTestConfigureColumns')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { OrderBuilder } = require('../../data/configureColumns/OrderBuilder')
let { ConfigureColumnsBuilder } = require('../../data/configureColumns/ConfigureColumnsBuilder')
let { usersUI } = require('../../repo/portalSideNavigation/users/usersUI')
let { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')

let testConfigureColumns_UsersTable = async (env = {}, credential = '') => {

    const order1 = await OrderBuilder().setColumnName(`Contact`)
                                       .setArrowUp(true)
                                       .setCount(4)
                                       .build()

    const order2 = await OrderBuilder().setColumnName(`Last Name`)
                                       .setArrowUp(false)
                                       .setCount(4)
                                       .build()

    const order3 = await OrderBuilder().setColumnName(`Role`)
                                       .setArrowUp(true)
                                       .setCount(3)
                                       .build()

    const orders = [order1, order2, order3]

    const configCol = await ConfigureColumnsBuilder().setTable(usersUI().table)
                                                     .setResetHeader( [ `User Name`, `First Name`, `Last Name`, `Organization`, `Contact`, `Role`, `Status`] )
                                                     .setRemovedHeader( [ `User Name`, `First Name`, `Last Name`, `Contact`, `Role`, `Status`], `Organization` )
                                                     .setMixupHeader( [ `Contact`, `Role`, `User Name`, `First Name`, `Organization`, `Status`, `Last Name`], orders )
                                                     .build()

    const test = await buildTestConfigureColumns(env, credential, clickUsers, configCol)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testConfigureColumns_UsersTable
}