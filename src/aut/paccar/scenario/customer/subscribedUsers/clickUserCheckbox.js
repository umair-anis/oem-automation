'use strict'

let { actions } = require('../../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let clickUserCheckbox = async (userName = []) => {

    let steps = []

    const userCheckbox = buildElement(`vehicleCheckbox`, `xpath`, `//div//span[contains(text(), "${userName}")]/../..//md-checkbox`)
    steps.push(await StepBuilder().setControl(await userCheckbox)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Subscribed User Checkbox: ${userName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickUserCheckbox
}