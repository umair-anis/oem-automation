'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')
const { buildElement } = require('../../../../core/element/buildElement')

const clickConfigureColumns = async () => {
  const steps = []

  const buttonMoreOptions = buildElement(`buttonMoreOptions`, `xpath`, `//md-toolbar/div/div/md-menu/button`)
  const buttonConfigureColumns = buildElement(`buttonConfigureColumns`, `css`, `[ng-click="$ctrl.configureColumns($event)"]`)

  steps.push(await StepBuilder().setControl(await buttonMoreOptions)
    .setAction(await actions().click)
    .build())

  steps.push(await StepBuilder().setControl(await buttonConfigureColumns)
    .setAction(await actions().isDisplayed)
    .build())
  steps.push(await StepBuilder().setControl(await buttonConfigureColumns)
    .setAction(await actions().click)
    .build())

  const scenario = await ScenarioBuilder().setName(`Click Configure Columns`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickConfigureColumns
}
