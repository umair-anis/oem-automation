'use strict'

const { actions } = require('../../../../core/action/actions')
const { blacklistUI } = require('../../repo/portalSideNavigation/blacklist/blacklistUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for entering a blacklist's destination information
 * @returns Scenario
 */
const enterDestination = async (destination = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await blacklistUI().fieldDestination)
    .setAction(await actions().enter)
    .setData(destination)
    .build())

  const scenario = await ScenarioBuilder().setName('Enter Destination Information')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterDestination
}
