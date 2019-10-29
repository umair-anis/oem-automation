'use strict'

const { clickEditHoursOfService } = require('./clickEditHoursOfService')
const { enterServiceType } = require('./enterServiceType')
const { enterOpen } = require('./enterOpen')
const { enterClose } = require('./enterClose')
const { clickDaysOfWeek } = require('./clickDaysOfWeek')
const { clickDone } = require('../clickDone')

const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildEditHoursOfService = async (hoursOfService = {}) => {
  const clickEditHoursOfServiceScenario = await clickEditHoursOfService(hoursOfService.serviceType)
  const enterServiceTypeScenario = await enterServiceType(hoursOfService.serviceType)
  const enterOpenScenario = await enterOpen(hoursOfService.open)
  const enterCloseScenario = await enterClose(hoursOfService.close)
  const clickDaysOfWeekScenario = await clickDaysOfWeek(hoursOfService.daysOfWeek)
  const clickDoneScenario = await clickDone()

  const scenarios = [clickEditHoursOfServiceScenario,
    enterServiceTypeScenario,
    enterOpenScenario,
    enterCloseScenario,
    clickDaysOfWeekScenario,
    clickDoneScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Edit Hours of Service: ${hoursOfService.serviceType}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildEditHoursOfService
}
