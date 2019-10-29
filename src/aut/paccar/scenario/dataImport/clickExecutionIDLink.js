'use strict'

let { actions } = require('../../../../core/action/actions')
let { dataImportUI } = require('../../repo/portalSideNavigation/dataImport/dataImportUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickExecutionIDLink = async (id = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dataImportUI().table)
                            .setAction(await actions().waitUntilPageLoaded)
                            .build())
    steps.push(await StepBuilder().setControl(await dataImportUI().table)
                            .setAction(await actions().isDisplayed)
                            .build())
    steps.push(await StepBuilder().setControl(await dataImportUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(id)
                            .setStaticWait(2000)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Execution ID Link: ${id}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickExecutionIDLink
}