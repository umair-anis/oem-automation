'use strict'

const { clickDeleteHoursOfService } = require('./clickDeleteHoursOfService')

const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildDeleteHoursOfService = async (hoursOfService = {}) => {
  const clickDeleteHoursOfServiceScenario = await clickDeleteHoursOfService(hoursOfService.serviceType)
  const scenarios = [clickDeleteHoursOfServiceScenario]
  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Delete Hours of Service: ${hoursOfService.serviceType}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildDeleteHoursOfService
}
