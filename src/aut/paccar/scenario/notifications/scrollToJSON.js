'use strict'

let { actions } = require('../../../../core/action/actions')
let { notificationsUI } = require('../../repo/portalSideNavigation/notifications/notificationsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let scrollToJSON = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await notificationsUI().codeJSON)
                            .setAction(await actions().scrollToElement)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Scroll To JSON`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    scrollToJSON
}