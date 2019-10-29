'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickEditVehicle } = require('./clickEditVehicle')
let { enterBasicInformation } = require('./enterBasicInformation')
let { selectOTAStatus } = require('./selectOTAStatus')
let { enterPrimaryDealer } = require('./enterPrimaryDealer')
let { clickSaveVehicle } = require('./clickSaveVehicle')

// Admin can only edit Basic Information, OTA Status, and Primary Dealer
let editVehicle_Everything = async () => {

    const vin = ['0123456789']
    const unitNumber = ['1234321']
    const description = ['vehicle description']
    const otaStatus = ['INACTIVE']
    const primaryDealer = ['Not available']

    let steps = []

    const clickEditVehicleScenario = await clickEditVehicle()
    const enterBasicInformationScenario = await enterBasicInformation(unitNumber, description)
    const selectOTAStatusScenario = await selectOTAStatus(otaStatus)
    const enterPrimaryDealerScenario = await enterPrimaryDealer(primaryDealer)
    const clickSaveVehicleScenario = await clickSaveVehicle()

    // Steps:
    // 1. Click Edit Vehicle
    // 2. Enter Vehicle information
    // 4. Click Save
    steps = await appendScenarios([ clickEditVehicleScenario
                                  , enterBasicInformationScenario
                                  , selectOTAStatusScenario 
                                  , enterPrimaryDealerScenario
                                  , clickSaveVehicleScenario  ])

    const scenario = await ScenarioBuilder().setName(`Edit Vehicle: ${vin}, ${unitNumber}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    editVehicle_Everything
}