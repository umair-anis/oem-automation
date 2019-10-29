'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const { buildElement } = require('../../../../../../core/element/buildElement')

const clickPhoneType = async (type = []) => {
  const steps = []

  const option = buildElement(`option`, `xpath`, `//div[@aria-hidden="false"]//md-radio-button[@aria-label="${type}"]`)
  steps.push(await StepBuilder().setControl(await option)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Phone Type: ${type}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickPhoneType
}
