'use strict'

const { clickDeletePhone } = require('./clickDeletePhone')

const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildDeletePhone = async (phone = {}) => {
  const clickDeletePhoneScenario = await clickDeletePhone(phone.phoneType)
  const scenarios = [clickDeletePhoneScenario]
  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Delete Phone: ${phone.name}, ${phone.phoneType}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildDeletePhone
}
