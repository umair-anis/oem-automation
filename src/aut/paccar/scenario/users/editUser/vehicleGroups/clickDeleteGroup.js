'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickDeleteGroup = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().buttonDeleteGroup)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Delete Group')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeleteGroup
}