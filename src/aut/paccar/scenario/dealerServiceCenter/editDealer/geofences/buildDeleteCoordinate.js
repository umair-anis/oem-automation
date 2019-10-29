'use strict'

const { clickDeleteCoordinate } = require('./clickDeleteCoordinate')

const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildDeleteCoordinate = async (coordinateName = []) => {
  const clickDeleteCoordinateScenario = await clickDeleteCoordinate(coordinateName)
  const scenarios = [clickDeleteCoordinateScenario]
  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Delete Coordinate: ${coordinateName}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildDeleteCoordinate
}
