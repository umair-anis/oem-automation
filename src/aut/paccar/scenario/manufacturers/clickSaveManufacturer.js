'use strict'

let { actions } = require('../../../../core/action/actions')
let { manufacturersUI } = require('../../repo/portalSideNavigation/manufacturers/manufacturersUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickSaveManufacturer = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await manufacturersUI().buttonSave)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Save Manufacturer`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSaveManufacturer
}