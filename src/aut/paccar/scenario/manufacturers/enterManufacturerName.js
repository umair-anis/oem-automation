'use strict'

let { actions } = require('../../../../core/action/actions')
let { manufacturersUI } = require('../../repo/portalSideNavigation/manufacturers/manufacturersUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let enterManufacturerName = async (name = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await manufacturersUI().fieldName)
                            .setAction(await actions().enter)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Manufacturer Name: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterManufacturerName
}