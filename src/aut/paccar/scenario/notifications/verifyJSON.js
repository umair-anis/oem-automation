'use strict'

let { actions } = require('../../../../core/action/actions')
let { notificationsUI } = require('../../repo/portalSideNavigation/notifications/notificationsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let verifyJSON = async (code = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await notificationsUI().codeJSON)
                            .setAction(await actions().contains)
                            .setData(code)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Verify JSON contains code: ${code}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    verifyJSON
}