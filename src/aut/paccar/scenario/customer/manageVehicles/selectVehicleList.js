'use strict'

let { actions } = require('../../../../../core/action/actions')
let { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let selectVehicleList = async (name = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().dropdownVehicleList)
                            .setAction(await actions().select)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Vehicle List: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectVehicleList
}