'use strict'

let { clickDeviceCheckbox } = require('../clickDeviceCheckbox')
let { clickSelectedMoreOptions } = require('./clickSelectedMoreOptions')
let { clickForceCall } = require('./clickForceCall')

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let buildDeviceForceCall = async (deviceName = []) => {

    // Scenarios
    const clickDeviceCheckboxScenario = await clickDeviceCheckbox(deviceName)
    const clickSelectedMoreOptionsScenario = await clickSelectedMoreOptions()
    const clickForceCallScenario = await clickForceCall()

    const scenarios = [   clickDeviceCheckboxScenario
                        , clickSelectedMoreOptionsScenario
                        , clickForceCallScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Click Device: ${deviceName} Force Call`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeviceForceCall
}