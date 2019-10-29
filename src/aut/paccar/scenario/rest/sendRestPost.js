'use strict'

let { customActions } = require('../../customAction/customActions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let sendRestPost = async (req = {}) => {

    let steps = []

    steps.push(await StepBuilder().setIsCustomAction(true)
                            .setAction(await customActions().sendPost)
                            .setData(req)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Send REST POST`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    sendRestPost
}