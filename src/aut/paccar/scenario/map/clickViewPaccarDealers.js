'use strict'

let { actions } = require('../../../../core/action/actions')
let { mapUI } = require('../../repo/map/mapUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking view paccar dealers
 * @returns Scenario
 */
let clickViewPaccarDealers = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mapUI().buttonViewPaccarDealers)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName('Click View Paccar Dealers')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickViewPaccarDealers
}