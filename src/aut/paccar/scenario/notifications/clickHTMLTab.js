'use strict'

let { actions } = require('../../../../core/action/actions')
let { notificationsUI } = require('../../repo/portalSideNavigation/notifications/notificationsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickHTMLTab = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await notificationsUI().tabHTML)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click HTML Tab`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickHTMLTab
}