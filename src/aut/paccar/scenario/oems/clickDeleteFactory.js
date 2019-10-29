'use strict'

let { actions } = require('../../../../core/action/actions')
let { oemsUI } = require('../../repo/portalSideNavigation/oems/oemsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')
let { buildElement } = require('../../../../core/element/buildElement')

let clickDeleteFactory = async (name = []) => {

    // TODO unusable for customer deletion need to update
    // Get the Edit Button that corresponds to the Factory Header
    const factoryDeletePath = `//md-card//md-card-content//h2[1][contains(text(), "${name}")]/../../div/button[3]`
    const buttonFactoryDelete = await buildElement(`buttonFactoryEdit`, `xpath`, factoryDeletePath)

    let steps = []

    steps.push(await StepBuilder().setControl(buttonFactoryDelete)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await oemsUI().buttonConfirmDeleteFactory)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Delete Factory: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeleteFactory
}