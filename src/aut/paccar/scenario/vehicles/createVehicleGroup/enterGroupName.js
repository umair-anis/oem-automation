'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterGroupName = async (name = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldGroupName)
                            .setAction(await actions().enter)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Group Name: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterGroupName
}