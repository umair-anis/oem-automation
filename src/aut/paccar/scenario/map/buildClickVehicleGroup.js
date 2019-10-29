'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickViewNotCommunicating } = require('../mainDashboard/recommendationTable/clickViewNotCommunicating')
let { clickGroupOfVehicles } = require('./clickGroupOfVehicles')
let { clickFrameTableLink } = require('./clickFrameTableLink')

let buildClickVehicleGroup = async (vin = []) => {

    // Scenarios
    const clickViewNotCommunicatingScenario = await clickViewNotCommunicating()
    const clickGroupOfVehiclesScenario = await clickGroupOfVehicles()
    const clickFrameTableLinkScenario = await clickFrameTableLink(vin)

    // Steps:
    // 1. Click Edit a Manufacturer
    // 2. Click Delete
    const steps = await appendScenarios([ clickViewNotCommunicatingScenario
                                        , clickGroupOfVehiclesScenario
                                        , clickFrameTableLinkScenario ])

    const scenario = await ScenarioBuilder().setName(`Click Vehicle: ${vin} from Vehicle Group Table`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildClickVehicleGroup
}