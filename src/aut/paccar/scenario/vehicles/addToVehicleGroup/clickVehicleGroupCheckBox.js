'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickVehicleGroupCheckBox = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().addToVehicleGroupTable)
                            .setAction(await actions().isDisplayed)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().addToVehicleGroupTable)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(search)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Add To Vehicle Table Checkbox with search term: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickVehicleGroupCheckBox
}