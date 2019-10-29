'use strict'

let { actions } = require('../../../../core/action/actions')
let { dataImportUI } = require('../../repo/portalSideNavigation/dataImport/dataImportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let verifyJobInfo = async (info = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dataImportUI().jobDetailsTable)
                            .setAction(await actions().searchInTable)
                            .setData(info)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Verify Job Info exists: ${info}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    verifyJobInfo
}