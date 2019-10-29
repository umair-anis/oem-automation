'use strict'

const { actions } = require('../../../../core/action/actions')
const { blacklistUI } = require('../../repo/portalSideNavigation/blacklist/blacklistUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for searching the Blacklist table with a destination term not in the table
 * @returns Scenario
 */
const searchNotInBlacklist = async (search = []) => {
  const steps = []
  steps.push(await StepBuilder().setIsCustomAction(true)
    .setAction(await actions().waitUntilPageLoaded)
    .build())

  steps.push(await StepBuilder().setControl(await blacklistUI().table)
    .setAction(await actions().searchNotInTableColumn)
    .setData([[2, search]])
    .build())

  const scenario = await ScenarioBuilder().setName(`Search for ${search} in Blacklist table`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  searchNotInBlacklist
}
