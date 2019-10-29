'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

const { buildElement } = require('../../../../core/element/buildElement')

const validateFilter = async (filter = []) => {
  const steps = []

  const filterName = buildElement(`filterName`, `xpath`, `//span[@class="chipText ng-binding"][contains(text(), "${filter}")]`)
  steps.push(await StepBuilder().setControl(await filterName)
    .setAction(await actions().isDisplayed)
    .build())

  const scenario = await ScenarioBuilder().setName(`Validate chip filter displayed`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  validateFilter
}
