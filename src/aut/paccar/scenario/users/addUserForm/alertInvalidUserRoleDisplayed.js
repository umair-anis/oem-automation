'use strict'

let { actions } = require('../../../../../core/action/actions')
let { usersUI } = require('../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let alertInvalidUserRoleDisplayed = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().invalidUserRoleAlert)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click if Invalid User Role Alert is Displayed')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    alertInvalidUserRoleDisplayed
}