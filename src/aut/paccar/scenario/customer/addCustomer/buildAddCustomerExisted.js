'use strict'

const { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

const { clickAddCustomer } = require('../addCustomer/clickAddCustomer')
const { enterName } = require('./enterName')
const { enterEmail } = require('./enterEmail')
const { validateDuplicateWarning } = require('./validateDuplicateWarning')

/**
 * Build a scenario for click  Add  Existed Customer
 * @returns Scenario
 */
const buildAddCustomerExisted = async (customer) => {
  // Scenarios
  const clickAddCustomerScenario = await clickAddCustomer()
  const enterNameScenario = await enterName(customer.name)
  const enterEmailScenario = await enterEmail(customer.email)
  const validateDuplicateWarningScenario = await validateDuplicateWarning()

  const scenarios = [clickAddCustomerScenario,
    enterNameScenario,
    enterEmailScenario,
    validateDuplicateWarningScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName('Add a Existed Customer')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildAddCustomerExisted
}
