'use strict'

let { actions } = require('../../../../core/action/actions')
let { profileUI } = require('../../repo/profile/profileUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickPrivacyAndTerms = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await profileUI().buttonPrivacyTerms)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Privacy & Terms`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickPrivacyAndTerms
}