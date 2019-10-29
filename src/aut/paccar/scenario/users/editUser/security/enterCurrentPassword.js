'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let enterCurrentPassword = async (password = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().fieldCurrentPassword)
                            .setAction(await actions().enter)
                            .setData(password)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Current Password: ${password}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterCurrentPassword
}