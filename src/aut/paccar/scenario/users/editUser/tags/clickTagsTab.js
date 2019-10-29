'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickTagsTab = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().buttonTagsTab)
                            .setAction(await actions().waitUntilVisible)
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().buttonTagsTab)
                            .setAction(await actions().click)
                            .setStaticWait(1000)    // User tabs buffer
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Tags Tab')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickTagsTab
}