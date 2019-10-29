'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickProfileTab = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().buttonProfileTab)
                            .setAction(await actions().waitUntilVisible)
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().buttonProfileTab)
                            .setAction(await actions().click)
                            .setStaticWait(1000)    // User tabs buffer
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Profile Tab')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickProfileTab
}