'use strict'

const { actions } = require('../../../../core/action/actions')
const { oemsUI } = require('../../repo/portalSideNavigation/oems/oemsUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for Click Customer Edit Button From Customer List
 * @returns Scenario
 */
const clickEditCustomerButton = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await oemsUI().buttonEdit)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Customer Edit Button From Customer List')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  clickEditCustomerButton
}
