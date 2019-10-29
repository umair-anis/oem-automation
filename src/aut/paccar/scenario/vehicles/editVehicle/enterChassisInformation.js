'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterChassisInformation = async (year = [], make = [], model = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldYear)
                            .setAction(await actions().enter)
                            .setData(year)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldMake)
                            .setAction(await actions().enter)
                            .setData(make)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldModel)
                            .setAction(await actions().enter)
                            .setData(model)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Chassis Information: ${year}, ${make}, ${model}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterChassisInformation
}