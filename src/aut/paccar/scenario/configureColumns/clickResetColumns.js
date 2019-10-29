'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')
const { buildElement } = require('../../../../core/element/buildElement')

const clickResetColumns = async () => {
  const steps = []

  const buttonReset = await buildElement(`buttonReset`, `xpath`, `//md-dialog-actions//button[@aria-label="Reset"]`)

  steps.push(await StepBuilder().setControl(buttonReset)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Configure Columns Reset`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickResetColumns
}
