'use strict'

let { actions } = require('../../../../core/action/actions')
let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for click Run
 * @returns Scenario
 */
let clickRun = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await fleetReportUI().buttonRun)
                                    .setAction(await actions().click)
                                    .build())

    const scenario = await ScenarioBuilder().setName('Click Run')
                                            .setSteps(steps)
                                            .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickRun
}