'use strict'

let { actions } = require('../../../../core/action/actions')
let { subscriptionsUI } = require('../../repo/portalSideNavigation/subscriptions/subscriptionsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickSubscriptionsCheckbox = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await subscriptionsUI().table)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(search)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Checkbox: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSubscriptionsCheckbox
}