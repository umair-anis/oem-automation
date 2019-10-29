'use strict'

let { actions } = require('../../../../../core/action/actions')
let { devicesUI } = require('../../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let clickAction = async (action = []) => {

    let steps = []

    const deviceAction = buildElement(`deviceAction`, `xpath`, `//md-menu-content//md-menu-item/button[contains(text(), "${action}")]`)
    steps.push(await StepBuilder().setControl(await deviceAction)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await devicesUI().buttonConfirmAction)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click and Confirm Click Action: ${action} in Actions dropdown`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickAction
}