'use strict'

let { actions } = require('../../../../core/action/actions')
let { vehiclesUI } = require('../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickVehicleLink = async (vin = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(vin)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Vin with search term: ${vin}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickVehicleLink
}