'use strict'

const { actions } = require('../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

const clickDealerCheckbox = async (name = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().filter)
    .setAction(await actions().enterFilterResultCustomSelect)
    .setData([name])
    .build())

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().table)
    .setAction(await actions().clickTableCheckbox)
    .setData(name)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Dealer Checkbox with Name: ${name}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickDealerCheckbox
}
