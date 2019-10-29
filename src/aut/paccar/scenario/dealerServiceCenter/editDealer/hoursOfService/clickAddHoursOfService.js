'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const clickAddHoursOfService = async () => {
  const steps = []

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().buttonAddHoursOfService)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Add Hours of Service`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickAddHoursOfService
}
