'use strict'

let { actions } = require('../../../../../core/action/actions')
let { remoteDiagnosticsUI } = require('../../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickDeactivate = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().buttonDeactivate)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().buttonConfirmActivation)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Deactivate, Validate Success`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeactivate
}