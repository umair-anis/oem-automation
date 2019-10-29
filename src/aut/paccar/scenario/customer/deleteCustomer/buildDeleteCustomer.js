'use strict'

const { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

const { searchCustomerTable } = require('../searchCustomerTable')
const { clickCustomerCheckBox } = require('../clickCustomerCheckBox')
const { clickTrash } = require('./clickTrash')

const buildDeleteCustomer = async (customer = {}) => {
  // Scenarios
  const searchCustomerTableScenario = await searchCustomerTable(customer.name)
  const clickCustomerCheckBoxScenario = await clickCustomerCheckBox(customer.name)
  const clickTrashScenario = await clickTrash()

  const scenarios = [searchCustomerTableScenario,
    clickCustomerCheckBoxScenario,
    clickTrashScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Delete a Customer: ${customer.name}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildDeleteCustomer
}
