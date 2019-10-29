'use strict'

let { actions } = require('../../../../core/action/actions')
let { mapUI } = require('../../repo/map/mapUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking view cummins distributors
 * @returns Scenario
 */
let clickViewCumminsDistributors = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mapUI().buttonViewCumminsDistributors)
                                  .setAction(await actions().click)
                                  .setStaticWait(1000)
                                  .build())

    const scenario = await ScenarioBuilder().setName('Click View Cummins Distributors')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickViewCumminsDistributors
}