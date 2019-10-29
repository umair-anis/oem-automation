'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const enterCityInfo = async (location = {}) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldCity)
    .setAction(await actions().enter)
    .setData(location.city)
    .build())

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().dropdownState)
    .setAction(await actions().select)
    .setData(location.state)
    .build())

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldZip)
    .setAction(await actions().enter)
    .setData(location.zipCode)
    .build())

  const scenario = await ScenarioBuilder().setName(`Enter City Information`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterCityInfo
}
