'use strict'

let { actions } = require('../../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let validateCustomer = async (customer = []) => {

    let steps = []

    const textCustomer = buildElement(`textCustomer`, `xpath`, `//a[contains(text(), "${customer}")]`)

    steps.push(await StepBuilder().setControl(await textCustomer)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Vehicle Customer is: ${customer}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateCustomer
}