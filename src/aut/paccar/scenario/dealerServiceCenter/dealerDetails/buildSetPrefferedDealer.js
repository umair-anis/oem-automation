'use strict'

const { clickDealerLink } = require('../clickDealerLink')
const { clickSetPreferredDealer } = require('./clickSetPreferredDealer')

const { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

const buildSetPrefferedDealer = async (dealer = {}) => {
  // Scenarios
  const clickDealerLinkScenario = await clickDealerLink(dealer.name)
  const clickSetPreferredDealerScenario = await clickSetPreferredDealer()

  const scenarios = [clickDealerLinkScenario,
    clickSetPreferredDealerScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Click Set Dealer: ${dealer.name} as Preferred Deale`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildSetPrefferedDealer
}
