'use strict'

const { clickEditPhone } = require('./clickEditPhone')
const { enterPhone } = require('./enterPhone')
const { clickPhoneType } = require('./clickPhoneType')
const { clickDone } = require('../clickDone')

const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildEditPhone = async (phone = {}) => {
  const clickEditPhoneScenario = await clickEditPhone(phone.phoneType)
  const enterPhoneScenario = await enterPhone(phone.number)
  const clickPhoneTypeScenario = await clickPhoneType(phone.phoneType)
  const clickDoneScenario = await clickDone()

  const scenarios = [clickEditPhoneScenario,
    enterPhoneScenario,
    clickPhoneTypeScenario,
    clickDoneScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Edit Phone: ${phone.number}, ${phone.phoneType}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildEditPhone
}
