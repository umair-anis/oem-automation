'use strict'

let { actions } = require('../../../../../core/action/actions')
let { profileUI } = require('../../../repo/profile/profileUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickContactTruckTechLink = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await profileUI().linkContactTruckTech)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Link: Contact Kenworth - Truck Tech`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickContactTruckTechLink
}