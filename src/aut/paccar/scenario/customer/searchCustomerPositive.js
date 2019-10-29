'use strict'

let {actions} = require('../../../../core/action/actions')
let {customersUI} = require('../../repo/portalSideNavigation/customers/customersUI')
let {ScenarioBuilder} = require('../../../../core/scenario/ScenarioBuilder')
let {StepBuilder} = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for click  search Customer Positive
 * @returns Scenario
 */
let searchCustomerPositive = async (data = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().tableFilter)
                                  .setAction(await actions().enterFilterResultCustomSelect)
                                  .setData([ data ])
                                  .build())

    steps.push(await StepBuilder().setControl(await customersUI().table)
                                  .setAction(await actions().searchExactInTable)
                                  .setData(data)
                                  .build())

    const scenario = await ScenarioBuilder().setName('Search for Customer Positive')
        .setSteps(steps)
        .build()
    return Object.freeze(scenario)
}

module.exports = {
    searchCustomerPositive
}