'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for enter name
 * @returns Scenario
 */
const enterName = async (name = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().fieldName)
    .setAction(await actions().enter)
    .setData(name)
    .build())

  const scenario = await ScenarioBuilder().setName('Enter name')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  enterName
}
