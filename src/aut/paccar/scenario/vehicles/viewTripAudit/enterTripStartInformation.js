'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterTripStartInformation = async (date = [], hour = [], minute = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldStartDate)
                            .setAction(await actions().enter)
                            .setData(date)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().dropdownHour)
                            .setAction(await actions().select)
                            .setData(hour)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().dropdownMinute)
                            .setAction(await actions().select)
                            .setData(minute)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Trip Start Date: ${date} Time: ${hour}:${minute}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterTripStartInformation
}