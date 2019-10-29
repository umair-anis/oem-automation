'use strict'

let { clickCollectionLink } = require('./clickCollectionLink')
let { verifyDevicesFilter } = require('./verifyDevicesFilter')
let { clickDeviceLink } = require('./collectionDetails/clickDeviceLink')

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let buildViewDeviceDetails = async (collectionName = [], deviceName = []) => {

    // Scenarios
    const clickCollectionLinkScenario = await clickCollectionLink(collectionName)
    const verifyDevicesFilterScenario = await verifyDevicesFilter(collectionName)
    const clickDeviceLinkScenario = await clickDeviceLink(deviceName)

    // Steps:
    // 1. Select a Device Collection Link
    // 2. Select a Device Link
    const steps = await appendScenarios([ clickCollectionLinkScenario
                                        , verifyDevicesFilterScenario
                                        , clickDeviceLinkScenario ])

    const scenario = await ScenarioBuilder().setName(`View Deivce Details: ${deviceName} in Collection: ${collectionName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildViewDeviceDetails
}