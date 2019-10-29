'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for click cancel
 * @returns Scenario
 */
const clickCancelButton = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().cancelBtn)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Cancel Customer Creation button')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickCancelButton
}
