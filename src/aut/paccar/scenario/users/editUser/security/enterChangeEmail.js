'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let enterChangeEmail = async (email = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().fieldChangeEmail)
                            .setAction(await actions().enter)
                            .setData(email)
                            .build())


    const scenario = await ScenarioBuilder().setName(`Enter Change Email: ${email}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterChangeEmail
}