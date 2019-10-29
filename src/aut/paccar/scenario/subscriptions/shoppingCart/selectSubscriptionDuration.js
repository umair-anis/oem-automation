'use strict'

let { actions } = require('../../../../../core/action/actions')
let { subscriptionsUI } = require('../../../repo/portalSideNavigation/subscriptions/subscriptionsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let selectSubscriptionDuration = async (years = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await subscriptionsUI().dropdownSubscriptionDuration)
                            .setAction(await actions().select)
                            .setData(years)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Subscription Duration: ${years}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectSubscriptionDuration
}