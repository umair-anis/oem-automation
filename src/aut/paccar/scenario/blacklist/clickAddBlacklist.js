'use strict'

const { actions } = require('../../../../core/action/actions')
const { blacklistUI } = require('../../repo/portalSideNavigation/blacklist/blacklistUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking Add to Blacklist
 * @returns Scenario
 */
const clickAddBlacklist = async () => {
  const steps = []

  // Need a static wait in case there is a window ontop of the button
  steps.push(await StepBuilder().setControl(await blacklistUI().buttonAddBlacklist)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Add To Blacklist')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickAddBlacklist
}
