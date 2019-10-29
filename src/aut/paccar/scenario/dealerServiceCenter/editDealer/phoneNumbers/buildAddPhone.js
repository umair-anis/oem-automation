'use strict'

const { clickAddPhone } = require('./clickAddPhone')
const { enterPhone } = require('./enterPhone')
const { clickPhoneType } = require('./clickPhoneType')
const { clickDone } = require('../clickDone')

const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildAddPhone = async (phone = {}) => {
  const clickAddPhoneScenario = await clickAddPhone()
  const enterPhoneScenario = await enterPhone(phone.number)
  const clickPhoneTypeScenario = await clickPhoneType(phone.phoneType)
  const clickDoneScenario = await clickDone()

  const scenarios = [clickAddPhoneScenario,
    enterPhoneScenario,
    clickPhoneTypeScenario,
    clickDoneScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Add Phone: ${phone.number}, ${phone.phoneType}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildAddPhone
}
