'use strict'

let { actions } = require('../../../../core/action/actions')
let { notificationsUI } = require('../../repo/portalSideNavigation/notifications/notificationsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickJSONTab = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await notificationsUI().tabJSON)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click JSON Tab`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickJSONTab
}