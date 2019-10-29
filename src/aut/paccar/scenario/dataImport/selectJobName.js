'use strict'

let { actions } = require('../../../../core/action/actions')
let { dataImportUI } = require('../../repo/portalSideNavigation/dataImport/dataImportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let selectJobName = async (name = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dataImportUI().dropdownJobName)
                            .setAction(await actions().select)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Job Name: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectJobName
}