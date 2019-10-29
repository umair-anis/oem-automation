'use strict'

let { actions } = require('../../../../core/action/actions')
let { dataExportUI } = require('../../repo/portalSideNavigation/dataExport/dataExportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickDownload = async (name = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dataExportUI().table)
                            .setAction(await actions().clickTableEnd)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click 'Download' Data: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDownload
}