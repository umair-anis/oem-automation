'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { selectPage } = require('./selectPage')

let buildSelectPage = async (options = []) => {

    // Scenarios
    const selectPageScenario = await selectPage(options[0])
    const scenarios = [ selectPageScenario ]

    for(let option of options){
        scenarios.push(await selectPage(option))
    }

    const steps = await appendScenarios(scenarios)
    const scenario = await ScenarioBuilder().setName(`Select ${options.length} varying Page options`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSelectPage
}