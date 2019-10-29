'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickMoreOptions } = require('./clickMoreOptions')
let { clickDensityHigh } = require('./clickDensityHigh')

let buildSetDensityHigh = async () => {

    // Scenarios
    const clickMoreOptionsScenario = await clickMoreOptions()
    const clickDensityHighScenario = await clickDensityHigh()

    const steps = await appendScenarios([ clickMoreOptionsScenario
                                        , clickDensityHighScenario ])

    const scenario = await ScenarioBuilder().setName(`Set Roles Density: High`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSetDensityHigh
}