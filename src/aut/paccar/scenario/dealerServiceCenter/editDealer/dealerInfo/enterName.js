'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const enterName = async (name = []) => {
  const steps = []
  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldName)
    .setAction(await actions().enter)
    .setData(name)
    .build())

  const scenario = await ScenarioBuilder().setName(`Enter Name: ${name}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterName
}
