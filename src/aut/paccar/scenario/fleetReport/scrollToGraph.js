'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let scrollToGraph = async (graph = {}) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await graph)
                            .setAction(await actions().scrollToElement)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Scroll to Graph`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    scrollToGraph
}