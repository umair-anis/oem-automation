'use strict'

const { actions } = require('../../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../core/step/StepBuilder')

const { buildElement } = require('../../../../../core/element/buildElement')

const validateCustomerSaved = async (name = []) => {
  const steps = []

  const customerTitle = await buildElement(`customerTitle`, `xpath`, `//h2[contains(text(), "${name}")]`)
  steps.push(await StepBuilder().setControl(customerTitle)
    .setAction(await actions().isDisplayed)
    .build())

  const scenario = await ScenarioBuilder().setName(`Validate Customer: ${name} Saved`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  validateCustomerSaved
}
