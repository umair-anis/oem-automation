'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

const closeBrowser = async () => {
  const steps = []

  steps.push(await StepBuilder().setAction(await actions().close)
    .build())

  const scenario = await ScenarioBuilder().setName('Close Browser')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  closeBrowser
}
