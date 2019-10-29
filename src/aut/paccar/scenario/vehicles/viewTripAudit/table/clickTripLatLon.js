'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { vehiclesUI } = require('../../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickTripLatLon = async (search = []) => {

    const tripLatLonColumn = 7

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().tripEventsTable)
                            .setAction(await actions().clickTableButton)
                            .setData([ search, tripLatLonColumn ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Trip: ${search} Trip Lat, Lon`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickTripLatLon
}