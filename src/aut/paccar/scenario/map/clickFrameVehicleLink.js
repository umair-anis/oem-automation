'use strict'

let { actions } = require('../../../../core/action/actions')
let { mapUI } = require('../../repo/map/mapUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickFrameVehicleLink = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mapUI().linkVehiclePin)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click Frame Vehicle Link`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickFrameVehicleLink
}