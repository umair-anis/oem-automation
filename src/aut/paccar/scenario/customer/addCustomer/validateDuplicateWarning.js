'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

const validateDuplicateWarning = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().promptDuplicateCustomerWarning)
    .setAction(await actions().isDisplayed)
    .build())

  const scenario = await ScenarioBuilder().setName('Save Negative Customer, Validate Duplicate Warning Displays')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  validateDuplicateWarning
}
