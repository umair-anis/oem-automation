'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let clickFaultGraph = async (dropdown = [], graphName = []) => {

    let steps = []

    // `Temperature - Engine` is open by default so close it
    const openDropdown = buildElement(`openDropdown`, `xpath`, `//button[@aria-label="panelTitle"]//div[contains(text(), "Temperature - Engine")]/../..`)
    steps.push(await StepBuilder().setControl(await openDropdown)
                            .setAction(await actions().isDisplayed)
                            .build())
    steps.push(await StepBuilder().setControl(await openDropdown)
                            .setAction(await actions().click)
                            .build())

    // Click Snapshot dropdown category via its name
    const category = buildElement(`category`, `xpath`, `//button[@aria-label="panelTitle"]//div[contains(text(), "${dropdown}")]/../..`)
    steps.push(await StepBuilder().setControl(await category)
                            .setAction(await actions().click)
                            .build())

    // Click Snapshot graph via its name
    const graph = buildElement(`graph`, `xpath`, `//fault-snapshot-graph-thumbnail//h2[contains(text(), "${graphName}")]`)
    steps.push(await StepBuilder().setControl(await graph)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Snapshot: ${dropdown}, ${graphName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickFaultGraph
}