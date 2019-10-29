'use strict'

let { actions } = require('../../../../../core/action/actions')
let { usersUI } = require('../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickTrash = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().buttonTrash)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().buttonConfirmDelete)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Trash - Delete User')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickTrash
}