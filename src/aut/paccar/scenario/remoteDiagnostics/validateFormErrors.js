'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateFormErrors = async (errorList = []) => {

    let steps = []

    steps.push(await StepBuilder().setIsCustomAction(true)
                            .setAction(await actions().compareFormErrors)
                            .setStaticWait(1000)
                            .setData([ errorList ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Remote Diagnostics has no input form errors`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateFormErrors
}