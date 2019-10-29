'use strict'

let { actions } = require('../../../../../core/action/actions')
let { remoteDiagnosticsUI } = require('../../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let selectRemovalCategory = async (category = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await remoteDiagnosticsUI().dropdownRemovalCategory)
                            .setAction(await actions().select)
                            .setData(category)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Removal Category: ${category}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectRemovalCategory
}