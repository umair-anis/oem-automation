'use strict'

let { actions } = require('../../../../core/action/actions')
let { googleAnalyticsReportUI } = require('../../repo/portalSideNavigation/googleAnalyticsReport/googleAnalyticsReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for entering a start date
 * @returns Scenario
 */
let enterStartDate = async (date = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await googleAnalyticsReportUI().fieldStartDate)
                            .setAction(await actions().enter)
                            .setData(date)
                            .build())

    const scenario = await ScenarioBuilder().setName('Enter Start Date')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterStartDate
}