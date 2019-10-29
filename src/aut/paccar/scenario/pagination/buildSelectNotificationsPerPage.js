'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { selectNotificationsPerPage } = require('./selectNotificationsPerPage')

let buildSelectNotificationsPerPage = async (options = []) => {

    // Scenarios
    const selectNotificationsPerPageScenario = await selectNotificationsPerPage(options[0])
    const scenarios = [ selectNotificationsPerPageScenario ]

    for(let option of options){
        scenarios.push(await selectNotificationsPerPage(option))
    }

    const steps = await appendScenarios(scenarios)
    const scenario = await ScenarioBuilder().setName(`Select ${options.length} varying Notifications Per Page options`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSelectNotificationsPerPage
}