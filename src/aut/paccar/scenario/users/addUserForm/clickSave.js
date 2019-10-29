'use strict'

let { actions } = require('../../../../../core/action/actions')
let { usersUI } = require('../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickSave = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().buttonSaveAddUser)
                            .setAction(await actions().isDisplayed)
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().buttonSaveAddUser)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Save - Add User')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSave
}