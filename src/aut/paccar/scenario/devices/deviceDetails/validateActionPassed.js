'use strict'

let { actions } = require('../../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let validateActionPassed = async (confirmationText = []) => {

    let steps = []

    const confirmation = buildElement(`confirmation`, `xpath`, `//md-dialog//*[contains(text(), "${confirmationText}")]`)
    steps.push(await StepBuilder().setControl(await confirmation)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Action has succeessfully executed`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateActionPassed
}