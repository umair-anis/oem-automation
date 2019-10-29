'use strict'

let { actions } = require('../../../../../core/action/actions')
let { profileUI } = require('../../../repo/profile/profileUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let validateReleaseNotes = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await profileUI().textReleaseNotes)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Release Notes has at lease one note`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateReleaseNotes
}