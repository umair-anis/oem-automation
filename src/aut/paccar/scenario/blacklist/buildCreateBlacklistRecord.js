'use strict'

const { clickAddBlacklist } = require('./clickAddBlacklist')
const { enterDestination } = require('./enterDestination')
const { clickAddBlacklistSave } = require('./clickAddBlacklistSave')
const { searchBlacklist } = require('./searchBlacklist')

const { appendScenarios } = require('../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

/**
 * Build a scenario for creating a new BlacklistCard
 * @returns Scenario
 */
const buildCreateBlacklistRecord = async (destination = []) => {
  // Scenarios
  const clickAddBlacklistScenario = await clickAddBlacklist()
  const enterDestinationScenario = await enterDestination(destination)
  const clickAddBlacklistSaveScenario = await clickAddBlacklistSave()
  const searchBlacklistScenario = await searchBlacklist(destination)

  // Steps:
  // 1. Click the Blacklist page to ensure it is the right page
  // 2. Click Add Button and enter Destination
  // 3. Click Save
  // 4. Check the new blacklist is in the list
  const scenarios = [clickAddBlacklistScenario,
    enterDestinationScenario,
    clickAddBlacklistSaveScenario,
    searchBlacklistScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName('Add a Blacklist Record')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildCreateBlacklistRecord
}
