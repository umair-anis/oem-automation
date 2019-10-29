'use strict'

const { actions } = require('../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../core/step/StepBuilder')

const scrollToGeofenceMap = async () => {
  let steps = []

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().mapGeofences)
    .setAction(await actions().isDisplayed)
    .build())

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().mapGeofences)
    .setAction(await actions().scrollToElement)
    .build())

  const scenario = await ScenarioBuilder().setName(`Scroll To Geofence Map`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
    scrollToGeofenceMap
}
