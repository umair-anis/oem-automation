'use strict'

let { actions } = require('../../../../../core/action/actions')
let { rolesUI } = require('../../../repo/portalSideNavigation/roles/rolesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickSave = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await rolesUI().buttonSave)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Save Role`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSave
}