'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const enterEmail = async (email = []) => {
  const steps = []
  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldEmail)
    .setAction(await actions().enter)
    .setData(email)
    .build())

  const scenario = await ScenarioBuilder().setName(`Enter Email: ${email}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterEmail
}
