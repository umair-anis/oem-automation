'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for select county
 * @returns Scenario
 */
const selectCountry = async (country = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().dropdownCountry)
    .setAction(await actions().select)
    .setData(country)
    .build())

  const scenario = await ScenarioBuilder().setName('Select country')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  selectCountry
}
