'use strict'

const { actions } = require('../../../../core/action/actions')
const { blacklistUI } = require('../../repo/portalSideNavigation/blacklist/blacklistUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking the Blacklist Trash a blacklist
 * @returns Scenario
 */
const clickTrash = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await blacklistUI().buttonTrash)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Trash Blacklist Record')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickTrash
}
