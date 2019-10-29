'use strict'

let { actions } = require('../../../../core/action/actions')
let { remoteDiagnosticsUI } = require('../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let searchIsNotRemoteDiag = async (vins = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().promptReactivateSuccess)
                            .setAction(await actions().isDisplayed)
                            .build())

    for(let vin of vins){
        steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().table)
                            .setAction(await actions().searchNotInTable)
                            .setData(vin)
                            .build())
    }

    const scenario = await ScenarioBuilder().setName(`Searching vins: ${vins} NOT in Remote Diagnostics Table`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    searchIsNotRemoteDiag
}