'use strict'

let { actions } = require('../../../../core/action/actions')
let { rolesUI } = require('../../repo/portalSideNavigation/roles/rolesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateTableDisplayed = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await rolesUI().table)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validaate Table is Displayed`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateTableDisplayed
}