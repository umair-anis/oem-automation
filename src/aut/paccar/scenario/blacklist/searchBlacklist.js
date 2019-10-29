'use strict'

const { actions } = require('../../../../core/action/actions')
const { blacklistUI } = require('../../repo/portalSideNavigation/blacklist/blacklistUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for searching the Blacklist table with a destination term
 * @returns Scenario
 */
const searchBlacklist = async (search = []) => {
  const steps = []
  steps.push(await StepBuilder().setControl(await blacklistUI().table)
    .setAction(await actions().isDisplayed)
    .build())
  steps.push(await StepBuilder().setControl(await blacklistUI().table)
    .setAction(await actions().searchInTableColumn)
    .setData([[2, search]])
    .build())

  const scenario = await ScenarioBuilder().setName(`Search for ${search} in Blacklist table`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  searchBlacklist
}
