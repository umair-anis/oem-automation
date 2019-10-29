'use strict'

let { actions } = require('../../../../core/action/actions')
let { diagnosticAssistantUI } = require('../../repo/portalSideNavigation/diagnosticAssistant/diagnosticAssistantUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let waitForAssistantLogin = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await diagnosticAssistantUI().loginTitle)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Wait for Paccar Solutions Diagnostic Assistant Page to load its login page`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    waitForAssistantLogin
}