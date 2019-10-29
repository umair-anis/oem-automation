'use strict'

const { clickCheckBox } = require('./clickCheckBox')
const { clickTrash } = require('./clickTrash')
const { searchNotInBlacklist } = require('./searchNotInBlacklist')
const { appendScenarios } = require('../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

/**
 * Build a scenario for creating a new BlacklistCard
 * @returns Scenario
 */
const buildDeleteBlacklistRecord = async (search = []) => {
  // Scenarios
  const clickCheckBoxScenario = await clickCheckBox(search)
  const clickTrashScenario = await clickTrash()
  const searchNotInBlacklistScenario = await searchNotInBlacklist(search)

  const scenarios = [clickCheckBoxScenario,
    clickTrashScenario,
    searchNotInBlacklistScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName('Delete a Blacklist Record and Validate it was deleted')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildDeleteBlacklistRecord
}
