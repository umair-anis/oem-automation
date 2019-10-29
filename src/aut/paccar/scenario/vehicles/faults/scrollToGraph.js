'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let scrollToGraph = async (graphName = []) => {

    let steps = []

    const graph = buildElement(`graph`, `xpath`, `//*[local-name()='text'][text()="${graphName}"]/../..`)
    steps.push(await StepBuilder().setControl(await graph)
                            .setAction(await actions().scrollToElement)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Scroll to Snapshot Graph: ${graphName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    scrollToGraph
}