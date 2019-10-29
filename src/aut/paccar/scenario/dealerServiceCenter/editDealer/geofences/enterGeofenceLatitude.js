'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const enterGeofenceLatitude = async (latitude = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldGeofenceLatitude)
    .setAction(await actions().enter)
    .setData(latitude)
    .build())

  const scenario = await ScenarioBuilder().setName(`Enter Geofence Latitude: ${latitude}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterGeofenceLatitude
}
