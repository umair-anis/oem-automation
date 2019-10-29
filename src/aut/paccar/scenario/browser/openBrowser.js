'use strict'

const { actions } = require('../../../../core/action/actions')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for opening a browser
 * @param {List of strings} urls
 * @returns Scenario
 */
const openBrowser = async (urls = []) => {
  const steps = []

  steps.push(await StepBuilder().setAction(await actions().open)
    .setData(urls)
    .build())

  const scenario = await ScenarioBuilder().setName('Open Browser')
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  openBrowser
}
