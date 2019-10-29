'use strict'

let { actions } = require('../../../../core/action/actions')
let { remoteDiagnosticsUI } = require('../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickExport = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().buttonExport)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Download/Export Remote Diagnostics`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickExport
}