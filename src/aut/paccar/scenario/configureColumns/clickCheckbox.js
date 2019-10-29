'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')
const { buildElement } = require('../../../../core/element/buildElement')

const clickCheckbox = async (columnName = []) => {
  const steps = []

  const buttonCheckbox = await buildElement(`buttonCheckbox`, `xpath`, `//table/tbody//tr//td[2]/span/span[contains(text(), "${columnName}")]/../../../td[1]/span/md-checkbox`)

  steps.push(await StepBuilder().setControl(buttonCheckbox)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Configure Columns Checkbox: ${columnName}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickCheckbox
}
