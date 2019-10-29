'use strict'

const { clickAddLocation } = require('./clickAddLocation')
const { enterAddressInfo } = require('./enterAddressInfo')
const { enterCityInfo } = require('./enterCityInfo')
const { clickDone } = require('../clickDone')

const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildAddLocation = async (location = {}) => {
  const clickAddLocationScenario = await clickAddLocation()
  const enterAddressInfoScenario = await enterAddressInfo(location)
  const enterCityInfoScenario = await enterCityInfo(location)
  const clickDoneScenario = await clickDone()

  const scenarios = [clickAddLocationScenario,
    enterAddressInfoScenario,
    enterCityInfoScenario,
    clickDoneScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Add Location: ${location.addressType}, ${location.address1}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildAddLocation
}
