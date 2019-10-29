'use strict'

let { actions } = require('../../../../core/action/actions')
let { rolesUI } = require('../../repo/portalSideNavigation/roles/rolesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickMoreOptions = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await rolesUI().buttonMoreOptions)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Roles More Options`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickMoreOptions
}