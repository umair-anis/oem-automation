'use strict'

const { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

const { enterName } = require('./enterName')
const { enterEmail } = require('./enterEmail')
const { enterAddress } = require('./enterAddress')
const { selectCountry } = require('./selectCountry')
const { enterPhone } = require('./enterPhone')
const { enterFax } = require('./enterFax')
const { clickJoinDealersCheckBox } = require('./clickJoinDealersCheckBox')

const buildFillCustomerForm = async (customer = {}) => {
  // Scenarios
  const enterNameScenario = await enterName(customer.name)
  const enterEmailScenario = await enterEmail(customer.email)
  const enterAddressScenario = await enterAddress(customer.address1, customer.address2, customer.city, customer.state, customer.zipCode)
  const selectCountryScenario = await selectCountry(customer.country)
  const enterPhoneScenario = await enterPhone(customer.phone)
  const enterFaxScenario = await enterFax(customer.fax)
  const clickJoinDealersCheckBoxScenario = await clickJoinDealersCheckBox(customer.joinDealerNetwork)

  const scenarios = [enterNameScenario,
    enterEmailScenario,
    enterAddressScenario,
    selectCountryScenario,
    enterPhoneScenario,
    enterFaxScenario]

  // Clicking Join Dealer Network Checkbox is not required
  if (customer.joinDealerNetwork) { scenarios.push(clickJoinDealersCheckBoxScenario) }

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Fill In Customer Form`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildFillCustomerForm
}
