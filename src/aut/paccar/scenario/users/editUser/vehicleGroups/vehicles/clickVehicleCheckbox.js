'use strict'

let { actions } = require('../../../../../../../core/action/actions')
let { usersUI } = require('../../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../../core/step/StepBuilder')

let clickVehicleCheckbox = async (vehicleUnitNumber = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().vehiclesTable)
                            .setAction(await actions().clickTableCheckbox)
                            .setStaticWait(3000)
                            .setData(vehicleUnitNumber)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Vehcile Checkbox: ${vehicleUnitNumber}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickVehicleCheckbox
}