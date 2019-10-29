'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { selectVehicleList } = require('./selectVehicleList')
let { selectFilterBy } = require('./selectFilterBy')
let { clickVehicleCheckbox } = require('./clickVehicleCheckbox')

let buildClickVehicleCheckbox = async (vehicleList = [], filterBy = [], vehicleName = []) => {

    // Scenarios
    const selectVehicleListScenario = await selectVehicleList(vehicleList)
    const selectFilterByScenario = await selectFilterBy(filterBy)
    const clickVehicleCheckboxScenario = await clickVehicleCheckbox(vehicleName)

    const scenarios = [  selectVehicleListScenario
                       , selectFilterByScenario
                       , clickVehicleCheckboxScenario  ]

    let steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Click Vehicle: ${vehicleName} under Manage Vehicles`)
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildClickVehicleCheckbox
}