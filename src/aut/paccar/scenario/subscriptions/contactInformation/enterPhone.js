'use strict'

let { actions } = require('../../../../../core/action/actions')
let { subscriptionsUI } = require('../../../repo/portalSideNavigation/subscriptions/subscriptionsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterPhone = async (phone = [], extension = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await subscriptionsUI().fieldPhone)
                            .setAction(await actions().enter)
                            .setData(phone)
                            .build())

    steps.push(await StepBuilder().setControl(await subscriptionsUI().fieldExtension)
                            .setAction(await actions().enter)
                            .setData(extension)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Phone: ${phone} : ${extension}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterPhone
}