'use strict'

let { actions } = require('../../../../../core/action/actions')
let { profileUI } = require('../../../repo/profile/profileUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickTabPrivacy_USCanada = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await profileUI().buttonPrivacy_USCanada)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Privacy (US & Canada)`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickTabPrivacy_USCanada
}