'use strict'

const { actions } = require('../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

const clickSelectedEdit = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().buttonSelectEdit)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Selected Dealer Edit`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickSelectedEdit
}
