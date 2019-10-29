'use strict'

const { actions } = require('../../../../../../core/action/actions')
const { dealerServiceCenterUI } = require('../../../../repo/dealerServiceCenter/dealerServiceCenterUI')
const { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
const { StepBuilder } = require('../../../../../../core/step/StepBuilder')

const enterGeofenceLongitude = async (longitude = []) => {
  const steps = []

  steps.push(await StepBuilder().setControl(await dealerServiceCenterUI().fieldGeofenceLongitude)
    .setAction(await actions().enter)
    .setData(longitude)
    .build())

  const scenario = await ScenarioBuilder().setName(`Enter Geofence Longitude: ${longitude}`)
    .setSteps(steps)
    .build()
  return Object.freeze(scenario)
}

module.exports = {
  enterGeofenceLongitude
}
