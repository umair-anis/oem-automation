'use strict'

let { actions } = require('../../../../core/action/actions')
let { remoteDiagnosticsUI } = require('../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickTabReactivate = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().tabReactivate)
                            .setAction(await actions().click)
                            .setStaticWait(1000)    // Remote Diag Buffer for the tabs to load and click across panels properly
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Reactivate Tab`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickTabReactivate
}