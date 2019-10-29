'use strict'

const { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

const { clickAddCustomer } = require('./clickAddCustomer')
const { buildFillCustomerForm } = require('./buildFillCustomerForm')
const { clickSave } = require('./clickSave')

/**
 * Build a scenario for click  Add Customer
 * @returns Scenario
 */
const buildAddCustomer = async (customer = {}) => {
  // Scenarios
  const clickAddCustomerScenario = await clickAddCustomer()
  const buildFillCustomerFormScenario = await buildFillCustomerForm(customer)
  const clickSaveScenario = await clickSave()

  const scenarios = [clickAddCustomerScenario,
    buildFillCustomerFormScenario,
    clickSaveScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Add a new Customer: ${customer.name}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildAddCustomer
}
