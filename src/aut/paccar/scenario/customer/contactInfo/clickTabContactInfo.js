'use strict'

const { actions } = require('../../../../../core/action/actions')
const { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

const clickTabContactInfo = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await customersUI().tabContactInfo)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName('Click Tab Contact Info')
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickTabContactInfo
}
