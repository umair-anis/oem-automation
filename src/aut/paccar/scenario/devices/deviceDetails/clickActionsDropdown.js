'use strict'

let { actions } = require('../../../../../core/action/actions')
let { devicesUI } = require('../../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickActionsDropdown = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().dropdownActions)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Actions Dropdown`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickActionsDropdown
}