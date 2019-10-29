'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

const clickAddCustomer = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().buttonAddCustomer)
    .setAction(await actions().click)
    .setStaticWait(3000) // Wait for Customer Table to load
    .build())

  const scenario = await ScenarioBuilder().setName('Click Add Customer Button')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickAddCustomer
}
