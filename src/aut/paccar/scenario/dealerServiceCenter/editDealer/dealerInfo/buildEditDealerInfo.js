'use strict'

const { enterName } = require('./enterName')
const { enterEmail } = require('./enterEmail')
const { enterID } = require('./enterID')
const { enterLatitude } = require('./enterLatitude')
const { enterLongitude } = require('./enterLongitude')
const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildEditDealerInfo = async (dealer = {}) => {
  // Scenarios
  const enterNameScenario = await enterName(dealer.name)
  const enterEmailScenario = await enterEmail(dealer.email)
  const enterIDScenario = await enterID(dealer.id)
  const enterLatitudeScenario = await enterLatitude(dealer.latitude)
  const enterLongitudeScenario = await enterLongitude(dealer.longitude)

  const scenarios = [enterNameScenario]

  // If any of these fields are blank, then do not touch them
  if (dealer.email.toString() !== '') scenarios.push(enterEmailScenario)
  if (dealer.id.toString() !== '') scenarios.push(enterIDScenario)
  if (dealer.latitude.toString() !== '') scenarios.push(enterLatitudeScenario)
  if (dealer.longitude.toString() !== '') scenarios.push(enterLongitudeScenario)

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Enter Dealer Info: ${dealer.name}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildEditDealerInfo
}
