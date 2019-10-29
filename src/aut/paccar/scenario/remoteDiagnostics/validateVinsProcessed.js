'use strict'

let { customActions } = require('../../customAction/customActions')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateVinsProcessed = async () => {

    let steps = []

    steps.push(await StepBuilder().setIsCustomAction(true)
                            .setAction(await customActions().validateVinsProcessed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Remote Diagnostics VINs have processed`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateVinsProcessed
}