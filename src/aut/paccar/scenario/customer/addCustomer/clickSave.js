'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

const clickSave = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().buttonSaveCustomer)
    .setAction(await actions().click)
    .build())

  steps.push(await StepBuilder().setControl(await customersUI().buttonConfirmSaveCustomer)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Save, Click Confirm Save Customer')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  clickSave
}
