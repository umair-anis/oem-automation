'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { vehiclesUI } = require('../../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickTripEvent = async (search = []) => {

    const tripEventColumn = 1

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().tripEventsTable)
                            .setAction(await actions().clickTableButton)
                            .setStaticWait(4000)
                            .setData([ [search, tripEventColumn] ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Trip: ${search} Trip Event`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickTripEvent
}