'use strict'

let { actions } = require('../../../../core/action/actions')
let { dataExportUI } = require('../../repo/portalSideNavigation/dataExport/dataExportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let { getDataExportFileFormat } = require('./getDataExportFileFormat')

let buildDownloadDataExport = async (name = []) => {

    let steps = []

    const file = await getDataExportFileFormat(name)

    steps.push(await StepBuilder().setControl(await dataExportUI().table)
                            .setAction(await actions().clickTableEnd)
                            .setData(file)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Download Data Export File: ${file} from Data Export Table`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildDownloadDataExport
}