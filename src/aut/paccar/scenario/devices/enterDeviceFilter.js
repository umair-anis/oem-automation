'use strict'

let { actions } = require('../../../../core/action/actions')
let { devicesUI } = require('../../repo/portalSideNavigation/devices/devicesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterDeviceFilter = async (filter = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await devicesUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ filter ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Device Filter: ${filter}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterDeviceFilter
}