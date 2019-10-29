'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

// Default is 0
let clickEmailNotifications = async (choiceName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().emailNotificationsPath)
                            .setAction(await actions().waitUntilVisible)
                            .build())
    steps.push(await StepBuilder().setControl(await usersUI().emailNotificationsPath)
                            .setAction(await actions().clickChoice)
                            .setData(choiceName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Multiple Choice: ${choiceName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickEmailNotifications
}