'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for click cancel
 * @returns Scenario
 */
const enterPhone = async (phone = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().fieldPhone)
    .setAction(await actions().enter)
    .setData(phone)
    .build())

  const scenario = await ScenarioBuilder().setName('Enter phone')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  enterPhone
}
