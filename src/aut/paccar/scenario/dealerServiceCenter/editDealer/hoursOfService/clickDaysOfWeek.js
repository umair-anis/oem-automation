'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const { buildElement } = require('../../../../../../core/element/buildElement')

const clickDaysOfWeek = async (days = []) => {
  const steps = []

  const checkboxTable = buildElement(`checkboxTable`, `xpath`, `//div[@aria-hidden="false"]//md-checkbox[@ng-repeat="weekday in $ctrl.weekdays"]`)
  steps.push(await StepBuilder().setControl(await checkboxTable)
    .setAction(await actions().isDisplayed)
    .build())

  // For days in the array, click its checkbox once.
  // Regardless of whether it has been checked or not
  for (const day of days) {
    const checkboxDay = buildElement(`checkboxDay`, `xpath`, `//div[@aria-hidden="false"]//md-checkbox[@ng-repeat="weekday in $ctrl.weekdays"][@aria-label="${day}"]`)
    steps.push(await StepBuilder().setControl(await checkboxDay)
      .setAction(await actions().click)
      .build())
  }

  const scenario = await ScenarioBuilder().setName(`Click Checkboxes: ${days}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  clickDaysOfWeek
}
