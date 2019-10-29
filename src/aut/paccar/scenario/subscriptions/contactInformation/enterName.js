'use strict'

let { actions } = require('../../../../../core/action/actions')
let { subscriptionsUI } = require('../../../repo/portalSideNavigation/subscriptions/subscriptionsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterName = async (firstName = [], lastName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await subscriptionsUI().fieldFirstName)
                            .setAction(await actions().enter)
                            .setData(firstName)
                            .build())

    steps.push(await StepBuilder().setControl(await subscriptionsUI().fieldLastName)
                            .setAction(await actions().enter)
                            .setData(lastName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Name: ${lastName}, ${firstName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterName
}