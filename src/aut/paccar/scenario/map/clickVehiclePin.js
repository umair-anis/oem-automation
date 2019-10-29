'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickVehiclePin = async () => {

    let steps = []

    // Vehicle Pins are consistently width = "26", nothing else
    const vehiclePin = await buildElement(`vehiclePin`, `xpath`, `//*[local-name()='image' and @width="26"]`)

    steps.push(await StepBuilder().setControl(vehiclePin)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click Vehicle Pin`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickVehiclePin
}