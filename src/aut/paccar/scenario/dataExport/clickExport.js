'use strict'

let { actions } = require('../../../../core/action/actions')
let { dataExportUI } = require('../../repo/portalSideNavigation/dataExport/dataExportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickExport = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dataExportUI().buttonExport)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click 'Export' Data Export Entity, Sends to Email`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickExport
}