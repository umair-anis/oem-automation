'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const enterAddressInfo = async (location = {}) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldAddressType)
    .setAction(await actions().enter)
    .setData(location.addressType)
    .build())

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldAddress1)
    .setAction(await actions().enter)
    .setData(location.address1)
    .build())

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldAddress2)
    .setAction(await actions().enter)
    .setData(location.address2)
    .build())

  const scenario = await ScenarioBuilder().setName(`Enter Address Information: ${location.addressType}, ${location.address1}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterAddressInfo
}
