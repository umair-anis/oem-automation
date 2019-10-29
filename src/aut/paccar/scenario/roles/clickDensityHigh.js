'use strict'

let { actions } = require('../../../../core/action/actions')
let { rolesUI } = require('../../repo/portalSideNavigation/roles/rolesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickDensityHigh = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await rolesUI().buttonHighOption)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setIsCustomAction(true)
                            .setAction(await actions().waitUntilPageLoaded)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click High Density`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDensityHigh
}