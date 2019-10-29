'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { selectRowsPerPage } = require('./selectRowsPerPage')

let buildSelectRowsPerPage = async (options = []) => {

    // Scenarios
    const selectRowsPerPageScenario = await selectRowsPerPage(options[0])
    const scenarios = [ selectRowsPerPageScenario ]

    for(let option of options){
        scenarios.push(await selectRowsPerPage(option))
    }

    const steps = await appendScenarios(scenarios)
    const scenario = await ScenarioBuilder().setName(`Select ${options.length} varying Rows Per Page options`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSelectRowsPerPage
}