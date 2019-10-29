'use strict'

let { actions } = require('../../../../core/action/actions')
let { manufacturersUI } = require('../../repo/portalSideNavigation/manufacturers/manufacturersUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickManufacturerLink = async (name = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await manufacturersUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ name ])
                            .build())

    steps.push(await StepBuilder().setControl(await manufacturersUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Manufacturer Link: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickManufacturerLink
}