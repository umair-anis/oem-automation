'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const { buildElement } = require('../../../../../../core/element/buildElement')

const clickDeletePhone = async (type = []) => {
  const steps = []

  const editButton = buildElement(`editButton`, `xpath`, `//h2[contains(text(), "${type}")]/../..//button[2]`)
  steps.push(await StepBuilder().setControl(await editButton)
    .setAction(await actions().click)
    .build())

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().buttonConfirmButton)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Delete Phone: ${type}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickDeletePhone
}
