'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')


let { clickCustomersTab } = require('./clickCustomersTab')
let { clickCustomerCheckbox } = require('./clickCustomerCheckbox')

/**
 * Build a scenario for Clicking a Subscribed Customer Checkbox
 * @returns Scenario
 */
let buildClickCustomer = async (customer = []) => {

    // Scenarios
    const clickCustomersTabScenario = await clickCustomersTab()
    const clickCustomerCheckboxScenario = await clickCustomerCheckbox(customer)

    // Steps:
    // 1. Click Subscribed Customers Tab
    // 2. Click The Checkbox associated with customer
    const steps = await appendScenarios([ clickCustomersTabScenario
                                        , clickCustomerCheckboxScenario ])

    const scenario = await ScenarioBuilder().setName(`Click Subscribed Customer: ${customer}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildClickCustomer
}