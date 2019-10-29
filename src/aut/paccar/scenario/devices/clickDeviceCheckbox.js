'use strict'

let { actions } = require('../../../../core/action/actions')
let { devicesUI } = require('../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickDeviceCheckbox = async (dsn = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().tableFilter)
                            .setAction(await actions().enterFilterResultCustomSelect)
                            .setData([ dsn ])
                            .build())

    steps.push(await StepBuilder().setControl(await devicesUI().table)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(dsn)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Device Checkbox with DSN: ${dsn}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeviceCheckbox
}