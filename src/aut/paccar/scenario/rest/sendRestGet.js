'use strict'

let { customActions } = require('../../customAction/customActions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let sendRestGet = async (req = {}) => {

    let steps = []

    steps.push(await StepBuilder().setIsCustomAction(true)
                            .setAction(await customActions().sendGet)
                            .setData(req)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Send REST GET`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    sendRestGet
}