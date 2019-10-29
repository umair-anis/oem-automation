'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

let { actions } = require('../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickGroupOfVehicles = async () => {

    let steps = []

    //*[local-name()='svg']//*[local-name()='circle'][7] where 7 is the index

    const vehiclesGroup = await buildElement(`vehiclesGroup`, `xpath`, `//*[local-name()='svg']//*[local-name()='circle'][7]`)

    steps.push(await StepBuilder().setControl(vehiclesGroup)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click Vehicle Group (circle)`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickGroupOfVehicles
}