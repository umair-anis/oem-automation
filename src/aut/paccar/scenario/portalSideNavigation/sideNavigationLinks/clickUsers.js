'use strict'

const { actions } = require('../../../../../core/action/actions')
const { portalSideNavigationUI } = require('../../../repo/portalSideNavigation/portalSideNavigationUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking the Side Navigation Users
 * @returns Scenario
 */
const clickUsers = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await portalSideNavigationUI().usersLink)
    .setAction(await actions().waitUntilVisible)
    .build())

  steps.push(await StepBuilder().setControl(await portalSideNavigationUI().usersLink)
    .setAction(await actions().click)
    .setStaticWait(3000)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Side Navigation Users Link')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickUsers
}