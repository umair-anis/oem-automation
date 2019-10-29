'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for enter email
 * @returns Scenario
 */
const enterEmail = async (email = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().fieldEmail)
    .setAction(await actions().enter)
    .setData(email)
    .build())

  const scenario = await ScenarioBuilder().setName('Enter Email')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterEmail
}
