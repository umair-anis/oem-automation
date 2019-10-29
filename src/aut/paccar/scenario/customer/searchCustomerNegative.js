'use strict'

let {actions} = require('../../../../core/action/actions')
let {customersUI} = require('../../repo/portalSideNavigation/customers/customersUI')
let {ScenarioBuilder} = require('../../../../core/scenario/ScenarioBuilder')
let {StepBuilder} = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for click  search Customer Negative
 * @returns Scenario
 */
let searchCustomerNegative = async (data = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().tableFilter)
                                  .setAction(await actions().enterFilterResultCustomSelect)
                                  .setData([ data ])
                                  .build())

    steps.push(await StepBuilder().setControl(await customersUI().table)
                                  .setAction(await actions().searchExactNotInTable)
                                  .setData(data)
                                  .build())

    const scenario = await ScenarioBuilder().setName('Search for Customer Negative')
        .setSteps(steps)
        .build()
    return Object.freeze(scenario)
}

module.exports = {
    searchCustomerNegative
}