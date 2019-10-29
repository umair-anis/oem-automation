'use strict'

let { actions } = require('../../../../core/action/actions')
let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for entering a start date
 * @returns Scenario
 */
let enterStartDate = async (startDate = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await fleetReportUI().fieldStartDate)
                                    .setAction(await actions().enter)
                                    .setData(startDate)
                                    .build())

    const scenario = await ScenarioBuilder().setName(`Enter Start Date: ${startDate}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterStartDate
}