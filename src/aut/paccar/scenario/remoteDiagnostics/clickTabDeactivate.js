'use strict'

let { actions } = require('../../../../core/action/actions')
let { remoteDiagnosticsUI } = require('../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickTabDeactivate = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().tabDeactivate)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Deactivate Tab`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickTabDeactivate
}