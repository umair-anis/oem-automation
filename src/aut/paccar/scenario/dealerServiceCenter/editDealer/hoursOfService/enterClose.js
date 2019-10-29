'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const enterClose = async (close = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldClose)
    .setAction(await actions().enter)
    .setData(close)
    .build())

  const scenario = await ScenarioBuilder().setName(`Enter Close: ${close}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterClose
}
