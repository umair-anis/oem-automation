'use strict'

const { actions } = require('../../../../../core/action/actions')
const { portalSideNavigationUI } = require('../../../repo/portalSideNavigation/portalSideNavigationUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking the Side Navigation Vehicles
 * @returns Scenario
 */
const clickVehicles = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await portalSideNavigationUI().vehiclesLink)
    .setAction(await actions().waitUntilVisible)
    .build())
  steps.push(await StepBuilder().setControl(await portalSideNavigationUI().vehiclesLink)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Side Navigation Vehicles Link')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickVehicles
}
