'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickMoreOptions } = require('./clickMoreOptions')
let { clickDensityLow } = require('./clickDensityLow')

let buildSetDensityLow = async () => {

    // Scenarios
    const clickMoreOptionsScenario = await clickMoreOptions()
    const clickDensityLowScenario = await clickDensityLow()

    const steps = await appendScenarios([ clickMoreOptionsScenario
                                        , clickDensityLowScenario ])

    const scenario = await ScenarioBuilder().setName(`Set Roles Density: Low`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSetDensityLow
}