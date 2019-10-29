'use strict'

const { actions } = require('../../../../core/action/actions')
const { blacklistUI } = require('../../repo/portalSideNavigation/blacklist/blacklistUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking Blacklist Save Button
 * @returns Scenario
 */
const clickAddBlacklistSave = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await blacklistUI().buttonAddBlacklistSave)
    .setAction(await actions().click)
    .build())

  steps.push(await StepBuilder().setControl(await blacklistUI().promptAddedSuccessfully)
    .setAction(await actions().isDisplayed)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Save, Validate Save Prompt is Displayed')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickAddBlacklistSave
}
