'use strict'

let { clickActionsDropdown } = require('./clickActionsDropdown')
let { clickAction } = require('./clickAction')
let { validateActionPassed } = require('./validateActionPassed')

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let buildClickAction = async (device = {}) => {

    // Scenarios
    const clickActionsDropdownScenario = await clickActionsDropdown()
    const clickActionScenario = await clickAction(device.action)
    const validateActionPassedScenario = await validateActionPassed(device.confirmation)

    const scenarios = [   clickActionsDropdownScenario
                        , clickActionScenario
                        , validateActionPassedScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Click Device Action: ${device.action}. Confirm it worked`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildClickAction
}