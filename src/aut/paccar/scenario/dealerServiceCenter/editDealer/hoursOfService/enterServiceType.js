'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const enterServiceType = async (serviceType = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldServiceType)
    .setAction(await actions().enter)
    .setData(serviceType)
    .build())

  const scenario = await ScenarioBuilder().setName(`Enter Service Type: ${serviceType}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterServiceType
}
