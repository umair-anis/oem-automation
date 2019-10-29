'use strict'

let { actions } = require('../../../../core/action/actions')
let { dataExportUI } = require('../../repo/portalSideNavigation/dataExport/dataExportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectEntity = async (entity = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dataExportUI().dropdownEntity)
                            .setAction(await actions().select)
                            .setData(entity)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Data Export Entity: ${entity}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectEntity
}