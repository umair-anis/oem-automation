'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickUnSubscribeAll = async () => {

    let steps = []

    // Ensure a loading display that covers window does not interupt click
    steps.push(await StepBuilder().setControl(await usersUI().buttonSubscribedCustomersTab)
                            .setAction(await actions().waitUntilVisible)
                            .build())
    steps.push(await StepBuilder().setControl(await usersUI().buttonSubscribedCustomersTab)
                            .setAction(await actions().click)
                            .build())
    steps.push(await StepBuilder().setControl(await usersUI().buttonUnsubscribeAll)
                            .setAction(await actions().waitUntilVisible)
                            .build())
    steps.push(await StepBuilder().setControl(await usersUI().buttonUnsubscribeAll)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Unsubscribe From All')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickUnSubscribeAll
}