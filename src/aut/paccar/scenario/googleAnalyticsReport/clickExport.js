'use strict'

let { actions } = require('../../../../core/action/actions')
let { googleAnalyticsReportUI } = require('../../repo/portalSideNavigation/googleAnalyticsReport/googleAnalyticsReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for click Export
 * @returns Scenario
 */
let clickExport = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await googleAnalyticsReportUI().buttonExport)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Export')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickExport
}