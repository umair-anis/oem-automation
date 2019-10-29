'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickNotificationsTab = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().buttonNotificationsTab)
                            .setAction(await actions().waitUntilVisible)
                            .build())
    steps.push(await StepBuilder().setControl(await usersUI().buttonNotificationsTab)
                            .setAction(await actions().click)
                            .setStaticWait(1000)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Notifications Tab')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickNotificationsTab
}