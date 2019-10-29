'use strict'

let { actions } = require('../../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let validateDiagnostics = async () => {

    let steps = []

    const diagnosticsTitle = buildElement(`diagnosticsTitle`, `css`, `[translate="vehicle.modalDiagnosticTemplate.title"]`)

    steps.push(await StepBuilder().setControl(await diagnosticsTitle)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Vehicle Run Diagnostics is displayed`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateDiagnostics
}