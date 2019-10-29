'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterSubscriptionInformation = async (start = [], end = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldSubscriptionStart)
                            .setAction(await actions().enter)
                            .setData(start)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldSubscriptionEnd)
                            .setAction(await actions().enter)
                            .setData(end)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Subscription Information: ${start}, ${end}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterSubscriptionInformation
}