'use strict'

let { actions } = require('../../../../../core/action/actions')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')
let { devicesUI } = require('../../../repo/portalSideNavigation/devices/devicesUI')

let { buildElement } = require('../../../../../core/element/buildElement')

let validateDeviceVersionData = async (deviceVersion = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().deviceVersionData)
        .setAction(await actions().wait)
        .build())

    steps.push(await StepBuilder().setControl(await devicesUI().deviceVersionData)
        .setAction(await actions().contains)
        .setData([deviceVersion])
        .build())


    const scenario = await ScenarioBuilder().setName(`Validate Device Version is ${deviceVersion}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateDeviceVersionData
}