'use strict'

let { actions } = require('../../../../core/action/actions')
let { topTenFaultsUI } = require('../../repo/portalSideNavigation/topTenFaults/topTenFaultsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickVehicleList = async (dtc = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await topTenFaultsUI().table)
                            .setAction(await actions().clickTableEnd)
                            .setData(dtc)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Top 10 Fault List with DTC: ${dtc}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickVehicleList
}