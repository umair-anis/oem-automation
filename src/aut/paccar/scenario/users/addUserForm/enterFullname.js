'use strict'

let { actions } = require('../../../../../core/action/actions')
let { usersUI } = require('../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterFullname = async (firstName = [], lastName = []) => {

    let steps = []

    // Wait for Edit User Form to load
    steps.push(await StepBuilder().setControl(await usersUI().fieldFirstName)
                            .setAction(await actions().isDisplayed)
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().fieldFirstName)
                            .setAction(await actions().enter)
                            .setData(firstName)
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().fieldLastName)
                            .setAction(await actions().enter)
                            .setData(lastName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Full Name: ${firstName} ${lastName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterFullname
}