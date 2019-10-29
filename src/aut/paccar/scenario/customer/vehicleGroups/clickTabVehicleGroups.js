'use strict'

let { actions } = require('../../../../../core/action/actions')
let { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickTabVehicleGroups = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().tabVehicleGroups)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Tab Vehicle Groups')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickTabVehicleGroups
}