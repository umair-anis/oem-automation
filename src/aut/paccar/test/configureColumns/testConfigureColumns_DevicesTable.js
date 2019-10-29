'use strict'

let { buildTestConfigureColumns } = require('./buildTestConfigureColumns')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { OrderBuilder } = require('../../data/configureColumns/OrderBuilder')
let { ConfigureColumnsBuilder } = require('../../data/configureColumns/ConfigureColumnsBuilder')
let { devicesUI } = require('../../repo/portalSideNavigation/devices/devicesUI')
let { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')

let testConfigureColumns_DevicesTable = async (env = {}, credential = '') => {

    const order1 = await OrderBuilder().setColumnName(`DSN`)
                                       .setArrowUp(false)
                                       .build()

    const order2 = await OrderBuilder().setColumnName(`IcapId`)
                                       .setArrowUp(false)
                                       .setCount(4)
                                       .build()

    const orders = [order1, order2]

    const configCol = await ConfigureColumnsBuilder().setTable(devicesUI().table)
                                                     .setResetHeader( [ `DSN`, `Device Type`, `Use Profile`, `Licenses`, `VIN`, `Device Version`, `Platform Version`, `System Version`, `Engine Make`, `Engine Model`, `CID`, `PFM Customer`, `Customer`, `IcapId`, `Icap Device Type`, `WiFi Status`, `VID Firmware Version`, `VID MCF`, `Last Location Date`, `Last Call End Time`, `Last Update`, `State` ] )
                                                     .setRemovedHeader( [ `DSN`, `Device Type`, `Use Profile`, `Licenses`, `VIN`, `Device Version`, `Platform Version`, `System Version`, `Engine Make`, `Engine Model`, `CID`, `PFM Customer`, `Customer`, `IcapId`, `WiFi Status`, `VID Firmware Version`, `VID MCF`, `Last Location Date`, `Last Call End Time`, `Last Update`, `State` ], `Icap Device Type` )
                                                     .setMixupHeader( [ `Device Type`, `DSN`, `Use Profile`, `Licenses`, `VIN`, `Device Version`, `Platform Version`, `System Version`, `Engine Make`, `Engine Model`, `CID`, `PFM Customer`, `Customer`, `Icap Device Type`, `WiFi Status`, `VID Firmware Version`, `VID MCF`, `IcapId`, `Last Location Date`, `Last Call End Time`, `Last Update`, `State` ], orders )
                                                     .build()

    const test = await buildTestConfigureColumns(env, credential, clickDevices, configCol)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testConfigureColumns_DevicesTable
}