'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')
const { buildElement } = require('../../../../core/element/buildElement')

const clickArrowUp = async (columnName = []) => {
  const steps = []

  const buttonArrow = await buildElement(`buttonCheckbox`, `xpath`, `//table/tbody//tr//td[2]/span/span[contains(text(), "${columnName}")]/../../../td[3]/span/button[1]`)

  steps.push(await StepBuilder().setControl(buttonArrow)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Configure Columns Arrow Up: ${columnName}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickArrowUp
}
