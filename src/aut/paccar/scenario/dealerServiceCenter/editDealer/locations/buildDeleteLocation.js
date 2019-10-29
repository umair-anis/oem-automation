'use strict'

const { clickDeleteLocation } = require('./clickDeleteLocation')

const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildDeleteLocation = async (location = {}) => {
  const clickDeleteLocationScenario = await clickDeleteLocation(location.addressType)
  const scenarios = [clickDeleteLocationScenario]
  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Delete Location: ${location.name}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildDeleteLocation
}
