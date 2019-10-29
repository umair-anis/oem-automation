'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for enter fax
 * @returns Scenario
 */
const enterFax = async (fax = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().fieldFax)
    .setAction(await actions().enter)
    .setData(fax)
    .build())

  const scenario = await ScenarioBuilder().setName('Enter fax')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  enterFax
}
