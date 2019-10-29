'use strict'

let { actions } = require('../../../../core/action/actions')
let { subscriptionsUI } = require('../../repo/portalSideNavigation/subscriptions/subscriptionsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickSubscriptionsCustomerLink = async (customer = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await subscriptionsUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(customer)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Customer Link: ${customer}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSubscriptionsCustomerLink
}