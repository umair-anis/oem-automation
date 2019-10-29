'use strict'

let { actions } = require('../../../../../core/action/actions')
let { devicesUI } = require('../../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickAddAllNewCollection = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().buttonMoreOptions)
                            .setAction(await actions().isDisplayed)
                            .build())

    steps.push(await StepBuilder().setControl(await devicesUI().buttonMoreOptions)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await devicesUI().buttonAddAllNewCollection)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Add All To New Collection`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickAddAllNewCollection
}