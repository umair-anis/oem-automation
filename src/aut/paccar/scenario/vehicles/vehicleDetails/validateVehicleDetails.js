'use strict'

let { customActions } = require('../../../customAction/customActions')
let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let validateVehicleDetails = async (vehicleDetails = {}) => {

    let steps = []

    steps.push(await StepBuilder().setAction(await actions().waitUntilPageLoaded)
                            .setIsCustomAction(true)
                            .build())

    steps.push(await StepBuilder().setAction(await customActions().validateVehicleDetails)
                            .setData(vehicleDetails)
                            .setIsCustomAction(true)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Vehicle Details`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateVehicleDetails
}