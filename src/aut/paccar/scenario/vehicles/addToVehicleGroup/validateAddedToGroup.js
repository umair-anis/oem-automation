'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let validateAddedToGroup = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().promptVehicleAddedToGroup)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Vehicle add to Vehicle Group`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateAddedToGroup
}