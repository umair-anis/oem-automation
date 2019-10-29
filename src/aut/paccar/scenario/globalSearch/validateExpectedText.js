'use strict'

let { actions } = require('../../../../core/action/actions')
let { buildElement } = require('../../../../core/element/buildElement')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateExpectedText = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setIsCustomAction(true)
        .setAction(await actions().waitUntilPageLoaded)
        .build())

    const expectedTextElement = await buildElement(`expectedTextElement`, `xpath`, `//*[contains(text(), "${search}")]`)
    steps.push(StepBuilder().setControl(expectedTextElement)
        .setAction(await actions().isDisplayed)
        .build())

    const scenario = ScenarioBuilder().setName(`Validate Expected Text: ${search} is displayed`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateExpectedText
}