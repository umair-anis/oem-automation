'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const enterID = async (id = []) => {
  const steps = []
  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldID)
    .setAction(await actions().enter)
    .setData(id)
    .build())

  const scenario = await ScenarioBuilder().setName(`Enter ID: ${id}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterID
}
