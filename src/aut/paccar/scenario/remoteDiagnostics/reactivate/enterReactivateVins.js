'use strict'

let { actions } = require('../../../../../core/action/actions')
let { remoteDiagnosticsUI } = require('../../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterReactivateVins = async (vins = []) => {

    let steps = []

    var vinsFormatted = ``

    // Enter Vins format: "Enter up to 50 VINs, separated by a comma"
    // Example with 2 Vins: 1234, 56789
    for(var i = 0; i < vins.length; i++){
        vinsFormatted = vinsFormatted + vins[i]

        // If it is the last vin in the list, do not add a comma at the end
        if(i < vins.length - 1)
            vinsFormatted = vinsFormatted + `, `
    }

    // Format as array for actions().enter
    vinsFormatted = [vinsFormatted]

    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().fieldReactivateVins)
                            .setAction(await actions().waitUntilVisible)
                            .build())
    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().fieldReactivateVins)
                            .setAction(await actions().enter)
                            .setData(vinsFormatted)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Reactivate Vins: ${vins}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterReactivateVins
}