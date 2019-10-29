'use strict'

let { actions } = require('../../../../core/action/actions')
let { vehiclesUI } = require('../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let searchVehicleTable = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().table)
                                    .setAction(await actions().enterFilterResult)
                                    .setData([ search ])
                                    .build())

    const scenario = await ScenarioBuilder().setName(`Search Vehicle Table: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    searchVehicleTable
}