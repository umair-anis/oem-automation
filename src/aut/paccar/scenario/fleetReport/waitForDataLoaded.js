'use strict'

let { actions } = require('../../../../core/action/actions')
let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for wait Fleet Report Loaded
 * @returns Scenario
 */
let waitForDataLoaded = async () => {

    let steps = []

    // Wait for the loading screen to appear
    steps.push(await StepBuilder().setControl(await fleetReportUI().loadingContainer)
                                    .setAction(await actions().wait)
                                    .build())

    // Wait for the loading screen to disappear (ie the page's UI elements are displayed)
    steps.push(await StepBuilder().setControl(await fleetReportUI().dropdownDuration)
                                    .setAction(await actions().isDisplayed)
                                    .build())

    const scenario = await ScenarioBuilder().setName('Wait Fleet Report Loaded')
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    waitForDataLoaded
}