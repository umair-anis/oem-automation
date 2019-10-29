'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterPrimaryDealer = async (dealer = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldPrimaryDealer)
                            .setAction(await actions().enter)
                            .setData(dealer)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Primary Dealer: ${dealer}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterPrimaryDealer
}