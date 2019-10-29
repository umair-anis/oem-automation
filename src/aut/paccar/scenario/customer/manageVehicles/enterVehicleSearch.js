'use strict'

let { actions } = require('../../../../../core/action/actions')
let { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterVehicleSearch = async (search = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().dropdownFilterBy)
                            .setAction(await actions().enter)
                            .setData(search)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Vehicle Search: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterVehicleSearch
}