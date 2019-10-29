'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')
const { buildElement } = require('../../../../core/element/buildElement')

const clickSaveColumns = async () => {
  const steps = []

  const buttonSave = await buildElement(`buttonSave`, `xpath`, `//md-dialog-actions//button[@aria-label="save"]`)

  steps.push(await StepBuilder().setControl(buttonSave)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Configure Columns Save`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickSaveColumns
}
