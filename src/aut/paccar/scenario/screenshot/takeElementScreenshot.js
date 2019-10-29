'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let takeElementScreenshot = async (element = {}, screenshot = {}) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await element)
                                  .setAction(await actions().takeScreenshot)
                                  .setData([screenshot])
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Take Screenshot of an Element`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    takeElementScreenshot
}