'use strict'

let { actions } = require('../../../../core/action/actions')
let { otaUI } = require('../../repo/ota/otaUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let switchHealthSoftwareSlider = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await otaUI().sliderHealthSoftware)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Switch Health/Software Slider`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    switchHealthSoftwareSlider
}