'use strict'

let { actions } = require('../../../../core/action/actions')
let { dataImportUI } = require('../../repo/portalSideNavigation/dataImport/dataImportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickRefresh = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dataImportUI().buttonRefresh)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Refresh Data Import Table`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickRefresh
}