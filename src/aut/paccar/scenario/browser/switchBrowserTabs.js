'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

const switchBrowserTabs = async (tabIndex = -1) => {
  const steps = []
  steps.push(await StepBuilder().setAction(await actions().switchTab)
    .setData(tabIndex)
    .setIsCustomAction(true)
    .build())

  const scenario = await ScenarioBuilder().setName(`Switch to Tab with Tab Index: ${tabIndex}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  switchBrowserTabs
}
