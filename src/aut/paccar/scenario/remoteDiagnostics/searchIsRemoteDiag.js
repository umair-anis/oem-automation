'use strict'

let { actions } = require('../../../../core/action/actions')
let { remoteDiagnosticsUI } = require('../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let searchIsRemoteDiag = async (vins = []) => {

    let steps = []

    // Wait for table to load properly
    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().promptDeactivateSuccess)
                            .setAction(await actions().isDisplayed)
                            .build())

    for(let vin of vins){
        steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().table)
                            .setAction(await actions().searchInTable)
                            .setData(vin)
                            .setStaticWait(1000)    // Remote Diag has table buffer even after browser has finished loading
                            .build())
    }

    const scenario = await ScenarioBuilder().setName(`Searching vins: ${vins} in Remote Diagnostics Table`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    searchIsRemoteDiag
}