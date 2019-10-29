'use strict'

let { buildTestConfigureColumns } = require('./buildTestConfigureColumns')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { OrderBuilder } = require('../../data/configureColumns/OrderBuilder')
let { ConfigureColumnsBuilder } = require('../../data/configureColumns/ConfigureColumnsBuilder')
let { vehiclesUI } = require('../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')

let testConfigureColumns_VehiclesTable = async (env = {}, credential = '') => {

    const order1 = await OrderBuilder().setColumnName(`Customer`)
                                       .setArrowUp(true)
                                       .build()

    const orders = [order1]

    // Note that the Configure Columns Arrows Table does not include the parenthesis
    // Ex: Column Header is 'Fuel Economy (km/L)' but shows up as 'Fuel Economy'
    const configCol = await ConfigureColumnsBuilder().setTable(vehiclesUI().table)
                                                     .setResetHeader( [ `Customer`, `Unit Number`, `Recommendation`, `Year`, `Make`, `Model`, `VIN`, `Fuel Economy (km/L)`, `Percent Idle (%)`, `Engine Hours (hrs)`, `Mileage (km)`, `Last Updated`, `DSN`, `Subscription End`, `Subscription Status`, `Description`] )
                                                     .setRemovedHeader( [ `Customer`, `Unit Number`, `Recommendation`, `Year`, `Make`, `Model`, `VIN`, `Fuel Economy (km/L)`, `Percent Idle (%)`, `Mileage (km)`, `Last Updated`, `DSN`, `Subscription End`, `Subscription Status`, `Description`], `Engine Hours` )
                                                     .setMixupHeader( [ `Customer`, `Unit Number`, `Recommendation`, `Year`, `Make`, `Model`, `VIN`, `Fuel Economy (km/L)`, `Percent Idle (%)`, `Engine Hours (hrs)`, `Mileage (km)`, `Last Updated`, `DSN`, `Subscription End`, `Subscription Status`, `Description`], orders )
                                                     .build()

    const test = await buildTestConfigureColumns(env, credential, clickVehicles, configCol)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testConfigureColumns_VehiclesTable
}