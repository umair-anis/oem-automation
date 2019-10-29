'use strict'

const { clickEditLocation } = require('./clickEditLocation')
const { enterAddressInfo } = require('./enterAddressInfo')
const { enterCityInfo } = require('./enterCityInfo')
const { clickDone } = require('../clickDone')

const { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

const buildEditLocation = async (location = {}) => {
  const clickEditLocationScenario = await clickEditLocation(location.addressType)
  const enterAddressInfoScenario = await enterAddressInfo(location)
  const enterCityInfoScenario = await enterCityInfo(location)
  const clickDoneScenario = await clickDone()

  const scenarios = [clickEditLocationScenario,
    enterAddressInfoScenario,
    enterCityInfoScenario,
    clickDoneScenario]

  const steps = await appendScenarios(scenarios)

  const scenario = await ScenarioBuilder().setName(`Edit Location: ${location.addressType}, ${location.address1}`)
    .setSteps(steps)
    .build()

  return Object.freeze(scenario)
}

module.exports = {
  buildEditLocation
}
