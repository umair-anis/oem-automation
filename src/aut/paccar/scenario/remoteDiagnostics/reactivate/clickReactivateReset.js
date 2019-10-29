'use strict'

let { actions } = require('../../../../../core/action/actions')
let { remoteDiagnosticsUI } = require('../../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickReactivateReset = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().buttonReactivateReset)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Reactivate Rest`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickReactivateReset
}