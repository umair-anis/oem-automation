'use strict'

let { actions } = require('../../../../core/action/actions')
let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for entering a end date
 * @returns Scenario
 */
let enterEndDate = async (endDate = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await fleetReportUI().fieldEndDate)
                                    .setAction(await actions().enter)
                                    .setData(endDate)
                                    .build())

    const scenario = await ScenarioBuilder().setName(`Enter End Date: ${endDate}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterEndDate
}