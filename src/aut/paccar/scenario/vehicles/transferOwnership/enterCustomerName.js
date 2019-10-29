'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterCustomerName = async (customerName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldCustomerName)
                            .setAction(await actions().enter)
                            .setData(customerName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Customer Name: ${customerName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterCustomerName
}