'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for click dealerNetworkCheckBox
 * @returns Scenario
 */
const clickJoinDealersCheckBox = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().checkboxDealerNetwork)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Join Dealers CheckBox')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  clickJoinDealersCheckBox
}
