'use strict'

let { actions } = require('../../../../core/action/actions')
let { dataImportUI } = require('../../repo/portalSideNavigation/dataImport/dataImportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickDownload = async (id = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dataImportUI().table)
                            .setAction(await actions().clickTableEnd)
                            .setData(id)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click 'Download' of Exection ID: ${id}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDownload
}