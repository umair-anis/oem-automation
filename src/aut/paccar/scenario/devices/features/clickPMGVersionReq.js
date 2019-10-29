'use strict'

let { actions } = require('../../../../../core/action/actions')
let { devicesUI } = require('../../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickPMGVersionReq = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().buttonPMGVersionReq)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await devicesUI().promptPMGVerReq)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click PMG Version Request`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickPMGVersionReq
}