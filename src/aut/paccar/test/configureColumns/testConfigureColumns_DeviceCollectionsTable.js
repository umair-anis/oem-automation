'use strict'

let { buildTestConfigureColumns } = require('./buildTestConfigureColumns')
let { invokeTest } = require('../../../../core/test/invokeTest')

let { OrderBuilder } = require('../../data/configureColumns/OrderBuilder')
let { ConfigureColumnsBuilder } = require('../../data/configureColumns/ConfigureColumnsBuilder')
let { deviceCollectionUI } = require('../../repo/portalSideNavigation/deviceCollection/deviceCollectionUI')
let { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')

let testConfigureColumns_DeviceCollectionsTable = async (env = {}, credential = '') => {

    const order1 = await OrderBuilder().setColumnName(`Description`)
                                       .setArrowUp(false)
                                       .build()

    const order2 = await OrderBuilder().setColumnName(`# Of Devices`)
                                       .setArrowUp(false)
                                       .build()


    const orders = [order1, order2]

    const configCol = await ConfigureColumnsBuilder().setTable(deviceCollectionUI().table)
                                                     .setResetHeader( [ `Name`, `Description`, `Device Tags`, `# Of Devices` ] )
                                                     .setRemovedHeader( [ `Name`, `Description`, `# Of Devices` ], `Device Tags` )
                                                     .setMixupHeader( [ `Name`, `Device Tags`, `Description`, `# Of Devices` ], orders )
                                                     .build()

    const test = await buildTestConfigureColumns(env, credential, clickDeviceCollection, configCol)
    const result = await invokeTest(test)
    return Object.freeze(result)
}

module.exports = {
    testConfigureColumns_DeviceCollectionsTable
}