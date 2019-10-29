'use strict'

let { actions } = require('../../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let clickVehicleCheckbox = async (vehicleName = []) => {

    let steps = []

    const vehicleCheckbox = buildElement(`vehicleCheckbox`, `xpath`, `//div[@ng-repeat="vehicle in $ctrl.vehicles"]//span[contains(text(), "${vehicleName}")]/../../md-checkbox`)
    steps.push(await StepBuilder().setControl(await vehicleCheckbox)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Vehicle Checkbox: ${vehicleName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickVehicleCheckbox
}