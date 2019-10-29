'use strict'

const { actions } = require('../../../../core/action/actions')
const { blacklistUI } = require('../../repo/portalSideNavigation/blacklist/blacklistUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for searching the Blacklist table with a search term
 * @returns Scenario
 */
const clickCheckBox = async (search = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await blacklistUI().table)
    .setAction(await actions().clickTableCheckbox)
    .setData(search)
    .setStaticWait(3000) // Buffer for table to update
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Checkbox with search term: ${search}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickCheckBox
}
