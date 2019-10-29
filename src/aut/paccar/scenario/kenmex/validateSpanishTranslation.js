'use strict'

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateSpanishTranslation = async (element = {}, language = {}) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await element)
                            .setAction(await actions().translate)
                            .setData(language.spanish)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Element contains Spanish: ${language.spanish}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateSpanishTranslation
}