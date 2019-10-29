'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

const compareHeaders = async (table = {}, header = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await table)
    .setAction(await actions().isDisplayed)
    .build())

  steps.push(await StepBuilder().setControl(await table)
    .setAction(await actions().isHeader)
    .setData([header])
    .build())

  const scenario = await ScenarioBuilder().setName(`Compare Current Table Header to Data`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  compareHeaders
}
