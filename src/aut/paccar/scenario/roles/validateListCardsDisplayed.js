'use strict'

let { actions } = require('../../../../core/action/actions')
let { rolesUI } = require('../../repo/portalSideNavigation/roles/rolesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateListCardsDisplayed = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await rolesUI().listCards)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validaate List of Cards is Displayed`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateListCardsDisplayed
}