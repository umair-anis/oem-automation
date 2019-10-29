'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateFormErrors = async (errorsList = []) => {

    let steps = []

    steps.push(await StepBuilder().setIsCustomAction(true)
                            .setAction(await actions().compareFormErrors)
                            .setStaticWait(1000)
                            .setData([ errorsList ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Start Date Needs to take place after a certain date`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateFormErrors
}