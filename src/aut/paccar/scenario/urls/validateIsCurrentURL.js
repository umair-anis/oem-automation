'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateIsCurrentURL = async (url = []) => {

    let steps = []
    steps.push(await StepBuilder().setAction(await actions().validateUrl)
                            .setData(url)
                            .setIsCustomAction(true)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate is Current URL: ${url}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateIsCurrentURL
}