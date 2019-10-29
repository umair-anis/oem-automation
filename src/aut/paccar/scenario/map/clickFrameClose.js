'use strict'

let { actions } = require('../../../../core/action/actions')
let { mapUI } = require('../../repo/map/mapUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickFrameClose = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mapUI().buttonFrameClose)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName(`Click Frame Close`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickFrameClose
}