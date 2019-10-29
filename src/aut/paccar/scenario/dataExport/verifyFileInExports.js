'use strict'

let { actions } = require('../../../../core/action/actions')
let { dataExportUI } = require('../../repo/portalSideNavigation/dataExport/dataExportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let verifyFileInExports = async (file = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dataExportUI().table)
                            .setAction(await actions().searchInTableColumn)
                            .setData([ [1, file] ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Verify file: ${file} is in Data Export Table`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    verifyFileInExports
}