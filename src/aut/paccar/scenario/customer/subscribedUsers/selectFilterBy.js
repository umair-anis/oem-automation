'use strict'

let { actions } = require('../../../../../core/action/actions')
let { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let selectFilterBy = async (filter = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().dropdownFilterUsersBy)
                            .setAction(await actions().select)
                            .setData(filter)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Filter By: ${filter}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectFilterBy
}