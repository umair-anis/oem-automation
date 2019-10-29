'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validReportFormErrors = async (errorsList = []) => {

    let steps = []

    steps.push(await StepBuilder().setIsCustomAction(true)
                            .setAction(await actions().compareFormErrors)
                            .setStaticWait(1000)
                            .setData([ errorsList ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Fleet Report Form Errors`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validReportFormErrors
}