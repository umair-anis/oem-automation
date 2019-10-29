'use strict'

let { actions } = require('../../../../core/action/actions')
let { devicesUI } = require('../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickDeviceLink = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().tableFilter)
                            .setAction(await actions().enterFilterResultCustomSelect)
                            .setData([ search ])
                            .build())

    steps.push(await StepBuilder().setControl(await devicesUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(search)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click DSN/VIN Link with search: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeviceLink
}