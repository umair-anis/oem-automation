'use strict'

let { searchDOG } = require('./searchDOG')
let { clickDeleteDOG } = require('./clickDeleteDOG')

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let buildDeleteDOG = async (name = []) => {

    // Scenarios
    const searchDOGScenario = await searchDOG(name)
    const clickDeleteDOGScenario = await clickDeleteDOG(name)

    // Steps:
    // 1. Search DOG
    // 2. Delete DOG
    const steps = await appendScenarios([ searchDOGScenario
                                        , clickDeleteDOGScenario ])

    const scenario = await ScenarioBuilder().setName(`Delete DOG: ${name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeleteDOG
}