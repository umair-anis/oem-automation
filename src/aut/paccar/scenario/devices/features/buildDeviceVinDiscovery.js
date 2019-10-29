'use strict'

let { clickDeviceCheckbox } = require('../clickDeviceCheckbox')
let { clickSelectedMoreOptions } = require('./clickSelectedMoreOptions')
let { clickVinDiscovery } = require('./clickVinDiscovery')

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let buildDeviceVinDiscovery = async (deviceName = []) => {

    // Scenarios
    const clickDeviceCheckboxScenario = await clickDeviceCheckbox(deviceName)
    const clickSelectedMoreOptionsScenario = await clickSelectedMoreOptions()
    const clickVinDiscoveryScenario = await clickVinDiscovery()

    const scenarios = [   clickDeviceCheckboxScenario
                        , clickSelectedMoreOptionsScenario
                        , clickVinDiscoveryScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Click Device: ${deviceName} Vin Discovery`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeviceVinDiscovery
}