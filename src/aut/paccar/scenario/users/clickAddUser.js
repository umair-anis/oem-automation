'use strict'

let { actions } = require('../../../../core/action/actions')
let { usersUI } = require('../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickAddUser = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().buttonAddUser)
                            .setAction(await actions().click)
                            .setStaticWait(2000)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Add User')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickAddUser
}