'use strict'

let { actions } = require('../../../../core/action/actions')
let { manufacturersUI } = require('../../repo/portalSideNavigation/manufacturers/manufacturersUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickDeleteManufacturer = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await manufacturersUI().buttonDelete)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await manufacturersUI().buttonConfirmDelete)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Delete Manufacturer`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeleteManufacturer
}