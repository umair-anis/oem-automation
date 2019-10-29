'use strict'

let { actions } = require('../../../../../core/action/actions')
let { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickSaveGroup = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().buttonSaveVehicleGroup)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await customersUI().tabVehicleGroups)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Save Group')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSaveGroup
}