'use strict'

let { actions } = require('../../../../core/action/actions')
let { remoteDiagnosticsUI } = require('../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickRemoteDiagLink = async (vin = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(vin)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Remote Diagnostics Table Link: ${vin}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickRemoteDiagLink
}