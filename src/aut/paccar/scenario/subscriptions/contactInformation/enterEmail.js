'use strict'

let { actions } = require('../../../../../core/action/actions')
let { subscriptionsUI } = require('../../../repo/portalSideNavigation/subscriptions/subscriptionsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterEmail = async (email = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await subscriptionsUI().fieldEmail)
                            .setAction(await actions().enter)
                            .setData(email)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Email: ${email}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterEmail
}