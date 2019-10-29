'use strict'

let { clickDeviceCheckbox } = require('../clickDeviceCheckbox')
let { clickSelectedMoreOptions } = require('./clickSelectedMoreOptions')
let { clickPMGVersionReq } = require('./clickPMGVersionReq')

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let buildDevicePMGVersionReq = async (deviceName = []) => {

    // Scenarios
    const clickDeviceCheckboxScenario = await clickDeviceCheckbox(deviceName)
    const clickSelectedMoreOptionsScenario = await clickSelectedMoreOptions()
    const clickPMGVersionReqScenario = await clickPMGVersionReq()

    const scenarios = [   clickDeviceCheckboxScenario
                        , clickSelectedMoreOptionsScenario
                        , clickPMGVersionReqScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Click Device: ${deviceName} PMG Version Request`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDevicePMGVersionReq
}